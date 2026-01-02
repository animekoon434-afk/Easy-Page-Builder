'use client';

import { motion } from 'framer-motion';
import { PenTool, UploadCloud, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: PenTool,
        title: "Visual Editor",
        desc: "Design your interface using our powerful drag-and-drop canvas."
    },
    {
        icon: UploadCloud,
        title: "Publish Instantly",
        desc: "Push to production with a singe click. Global CDN included."
    },
    {
        icon: TrendingUp,
        title: "Scale Automatically",
        desc: "Infrastructure that grows with you. Zero config required."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 relative z-10 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left: Graphic */}
                    <div className="relative h-[400px] card-cosmic p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                            <span className="text-cosmic-muted">Interface Mockup Preview</span>
                        </div>
                    </div>

                    {/* Right: Steps */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">Streamlined Workflow</h2>
                        <div className="space-y-8">
                            {steps.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-cosmic-violet/20 flex items-center justify-center shrink-0">
                                        <s.icon className="w-6 h-6 text-cosmic-violet" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                                        <p className="text-gray-400">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
