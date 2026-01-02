import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

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
        console.log('✅ Database connected successfully');

        const { userId } = await auth();

        if (!userId) {
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

            console.log('✅ Project created:', project.id);
            return NextResponse.json({ project }, { status: 201 });

        } catch (dbError) {
            console.error('Database error:', dbError.message);
            return NextResponse.json(
                {
                    error: 'Database error. Please try again.',
                    code: 'DATABASE_ERROR',
                },
                { status: 503 }
            );
        }
    } catch (error) {
        console.error('Error creating project:', error);
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
            console.error('Database error:', dbError.message);
            return NextResponse.json(
                {
                    error: 'Database not connected',
                    projects: []
                },
                { status: 200 }
            );
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { error: 'Internal server error', code: 'INTERNAL_ERROR' },
            { status: 500 }
        );
    }
}
