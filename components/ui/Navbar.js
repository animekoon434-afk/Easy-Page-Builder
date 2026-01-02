'use client';

import { MenuIcon, XIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from 'framer-motion';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const navlinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-600 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">
                        WebBuilder
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-pink-500 transition text-sm">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <button className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full text-sm font-medium">
                                Dashboard
                            </button>
                        </Link>
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: "w-8 h-8",
                                    userButtonPopoverCard: "bg-zinc-950 border border-white/10 shadow-xl",
                                    userButtonPopoverActionButton: "hover:bg-white/5",
                                    userButtonPopoverActionButtonText: "text-white",
                                    userButtonPopoverFooter: "hidden"
                                }
                            }}
                        />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in">
                            <button className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full text-sm font-medium">
                                Start free trial
                            </button>
                        </Link>
                    </SignedOut>
                    <button onClick={() => setIsOpen(true)} className="md:hidden">
                        <MenuIcon size={26} className="active:scale-90 transition" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-pink-500 transition">
                        {link.name}
                    </Link>
                ))}
                <SignedOut>
                    <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                        <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-medium">
                            Start free trial
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-medium">
                            Dashboard
                        </button>
                    </Link>
                </SignedIn>
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square w-10 h-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}
