import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { logger } from '@/lib/logger';

// Ensure Node.js runtime for Prisma compatibility (not Edge)
export const runtime = 'nodejs';

// Rate limiting: Maximum projects per user
const MAX_PROJECTS_PER_USER = 10;

// Zod validation schema
const createProjectSchema = z.object({
    name: z.string().min(1, 'Project name is required').max(100),
    slug: z.string().min(1).max(50).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
    frontend: z.enum(['html', 'react', 'nextjs']),
    styling: z.string().min(1, 'At least one styling option is required'),
    language: z.enum(['javascript', 'typescript']),
    backend: z.enum(['none', 'nodejs', 'python']).optional().default('none'),
});

export async function POST(request) {
    try {
        // Test database connection
        await prisma.$connect();
        logger.info('db', 'Database connected successfully');

        const { userId } = await auth();

        if (!userId) {
            logger.warn('auth', 'Unauthorized access attempt to POST /api/projects');
            return NextResponse.json(
                { error: 'Unauthorized', code: 'UNAUTHORIZED' },
                { status: 401 }
            );
        }

        const user = await currentUser();
        const body = await request.json();

        // Validate input with Zod
        const validationResult = createProjectSchema.safeParse(body);

        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => ({
                field: e.path.join('.'),
                message: e.message,
            }));
            logger.warn('validation', 'Project creation validation failed', { errors, userId });
            return NextResponse.json(
                { error: 'Validation failed', code: 'VALIDATION_ERROR', errors },
                { status: 400 }
            );
        }

        const { name, slug, frontend, styling, language, backend } = validationResult.data;

        try {
            // Upsert user (create if doesn't exist)
            await prisma.user.upsert({
                where: { id: userId },
                update: {
                    email: user?.emailAddresses?.[0]?.emailAddress || '',
                },
                create: {
                    id: userId,
                    email: user?.emailAddresses?.[0]?.emailAddress || '',
                },
            });

            // Check for duplicate slug for this user
            const existingProject = await prisma.project.findUnique({
                where: {
                    userId_slug: {
                        userId,
                        slug,
                    },
                },
            });

            if (existingProject) {
                return NextResponse.json(
                    { error: 'A project with this name already exists', code: 'DUPLICATE_PROJECT' },
                    { status: 409 }
                );
            }

            // Rate limiting: Check project count
            const projectCount = await prisma.project.count({
                where: { userId },
            });

            if (projectCount >= MAX_PROJECTS_PER_USER) {
                return NextResponse.json(
                    {
                        error: `You've reached the maximum of ${MAX_PROJECTS_PER_USER} projects. Upgrade to Pro for unlimited projects.`,
                        code: 'RATE_LIMIT_EXCEEDED'
                    },
                    { status: 429 }
                );
            }

            // Create project
            const project = await prisma.project.create({
                data: {
                    userId,
                    name,
                    slug,
                    frontend,
                    styling,
                    language,
                    backend,
                },
            });

            logger.info('api', 'Project created successfully', { projectId: project.id, userId });
            return NextResponse.json({ project }, { status: 201 });

        } catch (dbError) {
            logger.error('db', 'Database error during project creation', { error: dbError.message, userId });
            return NextResponse.json(
                {
                    error: 'Database error. Please try again.',
                    code: 'DATABASE_ERROR',
                },
                { status: 503 }
            );
        }
    } catch (error) {
        logger.error('api', 'Internal error during project creation', { error: error.message });
        return NextResponse.json(
            { error: 'Internal server error', code: 'INTERNAL_ERROR' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            logger.warn('auth', 'Unauthorized access attempt to GET /api/projects');
            return NextResponse.json(
                { error: 'Unauthorized', code: 'UNAUTHORIZED' },
                { status: 401 }
            );
        }

        try {
            const projects = await prisma.project.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    frontend: true,
                    styling: true,
                    language: true,
                    backend: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });

            return NextResponse.json({ projects }, { status: 200 });
        } catch (dbError) {
            logger.error('db', 'Database error while fetching projects', { error: dbError.message, userId });
            return NextResponse.json(
                {
                    error: 'Database not connected',
                    projects: []
                },
                { status: 200 }
            );
        }
    } catch (error) {
        logger.error('api', 'Internal error while fetching projects', { error: error.message });
        return NextResponse.json(
            { error: 'Internal server error', code: 'INTERNAL_ERROR' },
            { status: 500 }
        );
    }
}
