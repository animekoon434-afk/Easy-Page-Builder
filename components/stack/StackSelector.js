'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, RotateCcw } from 'lucide-react';
import OptionCard from './OptionCard';
import Button from '../ui/Button';
import useProjectStore from '@/store/useProjectStore';
import {
    frontendOptions,
    stylingOptions,
    languageOptions,
    backendOptions,
} from '@/data/techOptions';

const StackSelector = () => {
    const router = useRouter();
    const {
        frontend,
        styling,
        language,
        backend,
        projectName,
        setFrontend,
        toggleStyling,
        setLanguage,
        setBackend,
        setProjectName,
        resetProject,
    } = useProjectStore();

    const handleContinue = () => {
        // Validate selection
        if (!frontend || styling.length === 0 || !language) {
            return;
        }
        router.push('/structure');
    };

    return (
        <div className="space-y-12">
            {/* Project Name */}
            <Section title="Project Name" description="Give your project a name">
                <motion.input
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="My Awesome Project"
                    className="w-full max-w-md px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                />
            </Section>

            {/* Frontend Selection */}
            <Section title="Frontend Framework" description="Choose your preferred frontend technology">
                <div className="grid md:grid-cols-3 gap-4">
                    {frontendOptions.map((option) => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            selected={frontend}
                            onSelect={setFrontend}
                            type="single"
                        />
                    ))}
                </div>
            </Section>

            {/* Styling Selection */}
            <Section title="Styling" description="Select one or more styling options">
                <div className="grid md:grid-cols-3 gap-4">
                    {stylingOptions.map((option) => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            selected={styling}
                            onSelect={toggleStyling}
                            type="multi"
                        />
                    ))}
                </div>
            </Section>

            {/* Language Selection */}
            <Section title="Language" description="Choose your programming language">
                <div className="grid md:grid-cols-2 gap-4 max-w-xl">
                    {languageOptions.map((option) => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            selected={language}
                            onSelect={setLanguage}
                            type="single"
                        />
                    ))}
                </div>
            </Section>

            {/* Backend Selection */}
            <Section title="Backend (Optional)" description="Add a backend to your project">
                <div className="grid md:grid-cols-3 gap-4">
                    {backendOptions.map((option) => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            selected={backend}
                            onSelect={setBackend}
                            type="single"
                        />
                    ))}
                </div>
            </Section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
                <Button
                    variant="ghost"
                    onClick={resetProject}
                    className="text-gray-400"
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset Selection
                </Button>

                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleContinue}
                    disabled={!frontend || styling.length === 0 || !language}
                    className="group"
                >
                    Generate Folder Structure
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
};

const Section = ({ title, description, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
    >
        <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-gray-400 mt-1">{description}</p>
        </div>
        {children}
    </motion.div>
);

export default StackSelector;
