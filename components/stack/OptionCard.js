'use client';

import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';

const OptionCard = ({
    option,
    selected,
    onSelect,
    type = 'single', // 'single' or 'multi'
}) => {
    const { id, name, description, icon: Icon, disabled } = option;
    const isSelected = type === 'multi'
        ? selected?.includes?.(id)
        : selected === id;

    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            onClick={() => !disabled && onSelect(id)}
            disabled={disabled}
            className={`
        relative p-5 rounded-2xl text-left w-full
        border transition-all duration-300
        ${disabled
                    ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/5'
                    : isSelected
                        ? 'bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border-violet-500/50 shadow-lg shadow-violet-500/10'
                        : 'bg-white/5 border-white/10 hover:border-violet-500/30 hover:bg-white/10'
                }
      `}
        >
            {/* Selection indicator */}
            {isSelected && !disabled && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center"
                >
                    <Check className="w-4 h-4 text-white" />
                </motion.div>
            )}

            {/* Disabled indicator */}
            {disabled && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Lock className="w-3 h-3 text-gray-500" />
                </div>
            )}

            {/* Icon */}
            <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-4
        ${isSelected
                    ? 'bg-gradient-to-br from-violet-500 to-indigo-500'
                    : 'bg-white/10'
                }
      `}>
                <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
            </div>

            {/* Content */}
            <h3 className={`text-lg font-semibold mb-1 ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                {name}
            </h3>
            <p className="text-sm text-gray-400">
                {description}
            </p>
        </motion.button>
    );
};

export default OptionCard;
