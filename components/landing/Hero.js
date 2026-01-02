'use client';

import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import TiltImage from './TiltImage';

export default function Hero() {
    const specialFeatures = [
        "No credit card",
        "30 days free trial",
        "Setup in 10 minutes",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Badge */}
            <motion.a
                href="#features"
                className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-pink-100 bg-pink-200/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-pink-800 text-white text-xs px-3.5 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1">
                    <span>Try 30 days free trial option</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>

            {/* Heading */}
            <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium max-w-3xl text-center leading-tight mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Build websites{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap">your way.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Code, Drag & Drop, or AI — Fully Editable. Create stunning websites with the flexibility you deserve.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Link href="/create">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-7 h-11 font-medium transition-colors">
                        Get started
                    </button>
                </Link>
                <button className="flex items-center gap-2 border border-pink-900 hover:bg-pink-950/50 transition rounded-full px-6 h-11">
                    <VideoIcon strokeWidth={1} className="w-5 h-5" />
                    <span>Watch demo</span>
                </button>
            </motion.div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p
                        className="flex items-center gap-2"
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="w-5 h-5 text-pink-600" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>

            {/* Showcase Image with Tilt Effect */}
            <TiltImage src="/assets/hero-section-showcase.png" alt="WebBuilder Dashboard" />
        </div>
    );
}
