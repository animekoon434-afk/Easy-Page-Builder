'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Check, AlertCircle, Loader2, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Navbar, Button, Card } from '@/components/ui';
import { FolderTree } from '@/components/structure';
import useProjectStore from '@/store/useProjectStore';
import { generateFolderStructure, frontendOptions, stylingOptions, languageOptions, backendOptions } from '@/data/techOptions';
import { toast, Toaster } from 'sonner';

// Generate slug from project name
const generateSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 50) || 'my-project';
};

export default function StructurePage() {
    const router = useRouter();
    const { user, isLoaded } = useUser();
    const { frontend, styling, language, backend, projectName, setProjectName, resetProject } = useProjectStore();
    const [structure, setStructure] = useState(null);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(null);
    const [localName, setLocalName] = useState(projectName || '');

    // Generate structure on load
    useEffect(() => {
        if (!frontend || styling.length === 0) {
            router.push('/create');
            return;
        }

        // Generate folder structure
        const generatedStructure = generateFolderStructure({ frontend, styling, backend });
        setStructure(generatedStructure);
    }, [frontend, styling, backend, router]);

    // Get option names for display
    const getOptionName = (options, id) => {
        const option = options.find(o => o.id === id);
        return option?.name || id;
    };

    // Create project - ONLY when user clicks confirm
    const handleCreateProject = async () => {
        if (!user || !localName.trim()) {
            toast.error('Please enter a project name');
            return;
        }

        setSaving(true);
        setError(null);

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: localName.trim(),
                    slug: generateSlug(localName),
                    frontend,
                    styling: styling.join(','),
                    language,
                    backend,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create project');
            }

            setSaved(true);
            toast.success('Project created successfully!');

            // Reset store after successful creation
            setTimeout(() => {
                resetProject();
                router.push('/dashboard');
            }, 1500);

        } catch (err) {
            console.error('Error creating project:', err);
            setError(err.message);
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleStartNew = () => {
        resetProject();
        router.push('/create');
    };

    const slug = generateSlug(localName || 'my-project');

    return (
        <main className="min-h-screen">
            <Toaster
                position="top-right"
                theme="dark"
                toastOptions={{
                    style: {
                        background: 'rgba(15, 15, 25, 0.95)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        color: '#fff',
                    },
                }}
            />
            <Navbar />

            {/* Background effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Back Link */}
                <Link
                    href="/create"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Stack Selection
                </Link>

                {/* Page Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                <span className="text-sm text-amber-300">Preview Mode</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Review Your Project
                            </h1>
                            <p className="text-xl text-gray-400">
                                Review the folder structure and confirm to create your project.
                            </p>
                        </motion.div>
                    </div>

                    {/* Project Config Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card hover={false} className="lg:w-96">
                            <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>

                            {/* Project Name Input */}
                            <div className="mb-4">
                                <label className="block text-sm text-gray-400 mb-2">Project Name *</label>
                                <input
                                    type="text"
                                    value={localName}
                                    onChange={(e) => setLocalName(e.target.value)}
                                    placeholder="My Awesome Website"
                                    disabled={saved}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all disabled:opacity-50"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Slug: <span className="text-violet-400">{slug}</span>
                                </p>
                            </div>

                            {/* Stack Summary */}
                            <div className="space-y-3 text-sm border-t border-white/10 pt-4">
                                <StackItem label="Frontend" value={getOptionName(frontendOptions, frontend)} />
                                <StackItem label="Styling" value={styling.map(s => getOptionName(stylingOptions, s)).join(', ')} />
                                <StackItem label="Language" value={getOptionName(languageOptions, language)} />
                                <StackItem label="Backend" value={getOptionName(backendOptions, backend)} />
                            </div>

                            {/* Create Button */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                {!saved ? (
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={handleCreateProject}
                                        disabled={saving || !localName.trim()}
                                        className="w-full"
                                    >
                                        {saving ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Creating...
                                            </>
                                        ) : (
                                            <>
                                                <Rocket className="w-5 h-5" />
                                                Confirm & Create Project
                                            </>
                                        )}
                                    </Button>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 text-emerald-400 py-3">
                                        <Check className="w-5 h-5" />
                                        <span className="font-medium">Project Created! Redirecting...</span>
                                    </div>
                                )}

                                {error && (
                                    <div className="flex items-center gap-2 text-sm text-red-400 mt-3">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{error}</span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Folder Structure */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Folder Structure Preview</h2>
                    <FolderTree structure={structure} />
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
                >
                    <Button variant="secondary" size="lg" onClick={handleStartNew} disabled={saving}>
                        Start Over
                    </Button>
                    <Button variant="ghost" size="lg" disabled className="group">
                        <Download className="w-5 h-5" />
                        Download Project
                        <span className="text-xs text-gray-500 ml-2">(Coming Soon)</span>
                    </Button>
                </motion.div>
            </div>
        </main>
    );
}

const StackItem = ({ label, value }) => (
    <div className="flex justify-between">
        <span className="text-gray-500">{label}</span>
        <span className="text-white font-medium">{value}</span>
    </div>
);
