'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ badge, title, description }) {
    return (
        <>
            <motion.p
                className="text-center font-medium text-pink-600 mt-28 px-10 py-2 rounded-full bg-pink-950/70 border border-pink-800 w-max mx-auto"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {badge}
            </motion.p>
            <motion.h3
                className="text-3xl font-semibold text-center mx-auto mt-4"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {title}
            </motion.h3>
            <motion.p
                className="text-slate-300 text-center mt-2 max-w-xl mx-auto"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {description}
            </motion.p>
        </>
    );
}
