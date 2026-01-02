'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const pricingData = [
    {
        name: "Hobby",
        price: "Free",
        period: "forever",
        features: [
            "1 Project",
            "Basic Components",
            "Community Support",
            "Basic Analytics",
            "Standard Hosting"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 29,
        period: "month",
        features: [
            "Unlimited Projects",
            "AI Assistant",
            "Priority Support",
            "Custom Domains",
            "Advanced Analytics",
            "Premium Components",
            "Team Collaboration"
        ],
        mostPopular: true
    },
    {
        name: "Agency",
        price: 99,
        period: "month",
        features: [
            "White Label",
            "Client Management",
            "SSO Integration",
            "API Access",
            "Dedicated Support"
        ],
        mostPopular: false
    }
];

export default function Pricing() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                badge="Pricing"
                title="Simple, Transparent Pricing"
                description="Start free, upgrade as you grow. Flexible plans designed for every stage of your journey."
            />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`w-72 text-center border border-pink-950 p-6 pb-16 rounded-xl ${plan.mostPopular ? 'bg-pink-950 relative' : 'bg-pink-950/30'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-pink-400 rounded-full text-black font-medium">
                                Most Popular
                            </p>
                        )}
                        <p className="font-semibold text-lg">{plan.name}</p>
                        <h1 className="text-3xl font-semibold mt-2">
                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                            <span className="text-gray-500 font-normal text-sm">/{plan.period}</span>
                        </h1>
                        <ul className="list-none text-slate-300 mt-6 space-y-2 text-left">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4 text-pink-600" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/create">
                            <button
                                type="button"
                                className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all cursor-pointer ${plan.mostPopular
                                        ? 'bg-white text-pink-600 hover:bg-slate-200'
                                        : 'bg-pink-500 hover:bg-pink-600'
                                    }`}
                            >
                                Get Started
                            </button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
