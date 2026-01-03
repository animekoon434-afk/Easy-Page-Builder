'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonials';

function TestimonialCard({ testimonial, index }) {
    return (
        <motion.div
            className="p-4 rounded-lg mx-4 w-72 shrink-0 bg-pink-950/30 border border-pink-950"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div className="flex gap-2">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="text-white">{testimonial.name}</p>
                        {/* Verified Badge */}
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{testimonial.handle}</span>
                </div>
            </div>
            <p className="text-sm pt-4 text-slate-500 line-clamp-2">
                {testimonial.quote}
            </p>
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                badge="Testimonials"
                title="Loved by builders worldwide"
                description="Hear what our users say about us. Join thousands of satisfied creators building with Easy Page Builder."
            />

            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25} gradientColor="#000">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>

            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right" gradientColor="#000">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {testimonialsData.slice().reverse().map((testimonial, index) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto border-t border-slate-800 pt-12">
                <div>
                    <div className="text-3xl font-bold text-pink-500">4.9/5</div>
                    <div className="text-xs text-gray-500 mt-1">Average Rating</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">10,000+</div>
                    <div className="text-xs text-gray-500 mt-1">Happy Users</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">50,000+</div>
                    <div className="text-xs text-gray-500 mt-1">Websites Built</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-xs text-gray-500 mt-1">Uptime SLA</div>
                </div>
            </div>
        </div>
    );
}
