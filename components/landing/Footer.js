'use client';

import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const footerData = [
    {
        title: "Product",
        links: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Templates", href: "#" },
            { name: "Integrations", href: "#" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Documentation", href: "#" },
            { name: "Tutorials", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Support", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Contact", href: "#" },
            { name: "Privacy", href: "#" },
        ]
    }
];

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 border-t border-slate-800">
            <motion.div
                className="flex flex-wrap items-start gap-10 md:gap-20"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">E</span>
                    </div>
                    <span className="text-white font-semibold text-lg">Easy Page Builder</span>
                </Link>

                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="hover:text-pink-600 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Build websites your way — no limits, no compromises.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                        <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                        <YoutubeIcon className="w-6 h-6" />
                    </a>
                </div>
                <p className="mt-3 text-center">© {new Date().getFullYear()} Easy Page Builder. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}
