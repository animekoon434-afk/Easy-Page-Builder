'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, MailIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact() {
    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                badge="Contact"
                title="Get in touch with us"
                description="Ready to start building? Let's connect and help you create something amazing."
            />

            <form
                onSubmit={(e) => e.preventDefault()}
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full"
            >
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="mb-2 font-medium">Your name</p>
                    <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500 transition-colors">
                        <UserIcon className="w-5 h-5 text-slate-500" />
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 bg-transparent outline-none placeholder:text-slate-600"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className="mb-2 font-medium">Email address</p>
                    <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500 transition-colors">
                        <MailIcon className="w-5 h-5 text-slate-500" />
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-transparent outline-none placeholder:text-slate-600"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="sm:col-span-2"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className="mb-2 font-medium">Message</p>
                    <div className="flex items-start pl-3 pt-3 rounded-lg border border-slate-700 focus-within:border-pink-500 transition-colors">
                        <MessageSquareIcon className="w-5 h-5 text-slate-500 mt-0.5" />
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Tell us about your project..."
                            className="w-full p-3 pt-0 bg-transparent outline-none resize-none placeholder:text-slate-600"
                        />
                    </div>
                </motion.div>

                <motion.button
                    type="submit"
                    className="w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full font-medium transition-colors"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Send Message
                    <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
            </form>
        </div>
    );
}
