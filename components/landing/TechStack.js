'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import SectionTitle from './SectionTitle';
import { techStackData, techStatsData } from '@/data/techstack';

export default function TechStack() {
    return (
        <div id="techstack" className="mt-16">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <SectionTitle
                    badge="Tech Stack"
                    title="Works With Your Favorite Tools"
                    description="Seamless integration with the technologies you already love and use."
                />
            </div>

            {/* Marquee Tech Chips - Row 1 */}
            <motion.div
                className="mt-12 px-4 md:px-16 lg:px-24 xl:px-32"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Marquee className="max-w-5xl mx-auto" speed={40} gradient={true} gradientColor="#000" pauseOnHover>
                    {techStackData.map((tech, index) => (
                        <div
                            key={index}
                            className={`px-4 py-2 mx-2 rounded-full border ${tech.color} text-sm font-medium whitespace-nowrap`}
                        >
                            {tech.name}
                        </div>
                    ))}
                </Marquee>
            </motion.div>

            {/* Marquee Tech Chips - Row 2 (reverse direction) */}
            <motion.div
                className="mt-4 px-4 md:px-16 lg:px-24 xl:px-32"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Marquee className="max-w-5xl mx-auto" speed={30} gradient={true} gradientColor="#000" pauseOnHover direction="right">
                    {techStackData.slice().reverse().map((tech, index) => (
                        <div
                            key={index}
                            className={`px-4 py-2 mx-2 rounded-full border ${tech.color} text-sm font-medium whitespace-nowrap`}
                        >
                            {tech.name}
                        </div>
                    ))}
                </Marquee>
            </motion.div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 px-4 md:px-16 lg:px-24 xl:px-32">
                {techStatsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-pink-500">{stat.value}</div>
                        <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
