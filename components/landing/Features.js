'use client';

import { motion } from 'framer-motion';
import { MousePointer2, Sparkles, Globe, Box } from 'lucide-react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const featuresData = [
    {
        icon: <MousePointer2 className="w-8 h-8 text-pink-500" />,
        title: "Visual Drag & Drop",
        description: "Build pixel-perfect layouts without writing code. Intuitive editor gives you complete control."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-pink-500" />,
        title: "AI Assistant",
        description: "Generate content, optimize SEO, and create page structures with advanced AI engine."
    },
    {
        icon: <Globe className="w-8 h-8 text-pink-500" />,
        title: "Global Hosting",
        description: "Deploy to a global edge network instantly. Lightning fast load times worldwide."
    },
    {
        icon: <Box className="w-8 h-8 text-pink-500" />,
        title: "Component Library",
        description: "Access thousands of pre-built, premium components ready for your project."
    }
];

export default function Features() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                badge="Features"
                title="What you get"
                description="Components, patterns and pages — everything you need to ship."
            />

            {/* Feature Cards */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`${index === 1 ? 'p-px rounded-[13px] bg-gradient-to-br from-pink-600 to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full">
                            {feature.icon}
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Showcase Section */}
            <div className="mt-40 relative mx-auto max-w-5xl">
                <div className="absolute -z-50 w-[400px] h-[400px] -top-10 -left-20 aspect-square rounded-full bg-pink-500/40 blur-3xl"></div>

                <motion.p
                    className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Easy Page Builder helps you build faster by transforming your design vision into fully functional, production-ready websites.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div
                        className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <Image
                            className="h-full w-auto rounded-lg"
                            src="/assets/features-showcase-1.png"
                            alt="features showcase"
                            width={1000}
                            height={500}
                        />
                    </motion.div>

                    <motion.div
                        className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Image
                            src="/assets/features-showcase-2.png"
                            alt="features showcase"
                            width={1000}
                            height={500}
                            className="hover:-translate-y-0.5 transition duration-300 rounded-lg"
                        />
                        <h3 className="text-2xl text-slate-300 font-medium mt-6">
                            Better design with highest performance
                        </h3>
                        <p className="text-slate-300 mt-2">
                            Easy Page Builder empowers you to build beautifully and scale effortlessly.
                        </p>
                        <a href="#pricing" className="group flex items-center gap-2 mt-4 text-pink-600 hover:text-pink-700 transition">
                            Learn more about plans
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
