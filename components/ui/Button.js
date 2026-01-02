'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const variants = {
    primary: 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/25',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
    outline: 'bg-transparent border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    onClick,
    type = 'button',
    ...props
}, ref) => {
    return (
        <motion.button
            ref={ref}
            type={type}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-xl font-semibold
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        inline-flex items-center justify-center gap-2
        ${className}
      `}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
