'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Plus, Folder, Calendar, Code2, Palette, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Navbar, Button, Card } from '@/components/ui';
import { frontendOptions, stylingOptions } from '@/data/techOptions';

export default function DashboardPage() {
    const { user, isLoaded } = useUser();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if (!isLoaded || !user) return;

            try {
                const response = await fetch('/api/projects');
                const data = await response.json();

                if (response.ok) {
                    setProjects(data.projects || []);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError('Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [isLoaded, user]);

    const getOptionName = (options, id) => {
        const option = options.find(o => o.id === id);
        return option?.name || id;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Background effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Your Projects
                        </h1>
                        <p className="text-gray-400">
                            Manage and access all your website projects
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href="/create">
                            <Button variant="primary" size="lg">
                                <Plus className="w-5 h-5" />
                                New Project
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <Card hover={false} className="text-center py-12">
                        <p className="text-red-400 mb-4">{error}</p>
                        <Button variant="secondary" onClick={() => window.location.reload()}>
                            Try Again
                        </Button>
                    </Card>
                )}

                {/* Empty State */}
                {!loading && !error && projects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card hover={false} className="text-center py-16">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                                <Folder className="w-10 h-10 text-violet-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">No projects yet</h2>
                            <p className="text-gray-400 mb-6 max-w-md mx-auto">
                                Create your first project to get started. Choose your tech stack
                                and generate a folder structure.
                            </p>
                            <Link href="/create">
                                <Button variant="primary" size="lg">
                                    <Plus className="w-5 h-5" />
                                    Create Your First Project
                                </Button>
                            </Link>
                        </Card>
                    </motion.div>
                )}

                {/* Projects Grid */}
                {!loading && !error && projects.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full group">
                                    {/* Project Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center border border-violet-500/20">
                                            <Folder className="w-6 h-6 text-violet-400" />
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">/{project.slug}</p>

                                    {/* Stack Info */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Code2 className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">
                                                {getOptionName(frontendOptions, project.frontend)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Palette className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">
                                                {project.styling.split(',').map(s =>
                                                    getOptionName(stylingOptions, s.trim())
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">
                                                {formatDate(project.createdAt)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-4 border-t border-white/10">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="w-full group/btn"
                                            disabled
                                        >
                                            Open Project
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            <span className="text-xs text-gray-500 ml-2">(Coming Soon)</span>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
