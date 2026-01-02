'use client';

import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    hover = true,
    gradient = false,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hover ? { y: -5, scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
            className={`
        relative
        ${gradient
                    ? 'bg-gradient-to-br from-violet-500/10 to-indigo-500/10'
                    : 'bg-white/5'
                }
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        shadow-xl
        ${hover ? 'hover:border-violet-500/30 hover:shadow-violet-500/10' : ''}
        transition-all duration-300
        ${className}
      `}
            {...props}
        >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
