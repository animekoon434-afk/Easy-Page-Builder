'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Folder, File, FolderOpen } from 'lucide-react';

const FolderCard = ({ item, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(level < 2);
    const isFolder = item.children && item.children.length > 0;
    const hasChildren = isFolder;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: level * 0.05 }}
        >
            <motion.div
                whileHover={{ x: 5 }}
                onClick={() => hasChildren && setIsExpanded(!isExpanded)}
                className={`
          flex items-center gap-3 p-3 rounded-xl cursor-pointer
          ${hasChildren ? 'hover:bg-white/5' : ''}
          ${level === 0 ? 'bg-gradient-to-r from-violet-600/10 to-transparent border border-violet-500/20' : ''}
          transition-all duration-200
        `}
                style={{ marginLeft: `${level * 16}px` }}
            >
                {/* Expand/Collapse Icon */}
                {hasChildren ? (
                    <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5 flex items-center justify-center"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </motion.div>
                ) : (
                    <div className="w-5 h-5" />
                )}

                {/* Icon */}
                <div className={`
          w-10 h-10 rounded-xl flex items-center justify-center text-2xl
          ${isFolder
                        ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20'
                        : 'bg-white/5 border border-white/10'
                    }
        `}>
                    {item.icon || (isFolder ? (isExpanded ? '📂' : '📁') : '📄')}
                </div>

                {/* Name */}
                <div className="flex-1">
                    <span className={`
            font-medium
            ${isFolder ? 'text-white' : 'text-gray-300'}
          `}>
                        {item.name}
                    </span>
                    {item.type === 'file' && (
                        <span className="text-xs text-gray-500 ml-2">
                            {item.name.split('.').pop()}
                        </span>
                    )}
                </div>

                {/* Children count */}
                {hasChildren && (
                    <span className="text-xs text-gray-500 px-2 py-1 rounded-full bg-white/5">
                        {item.children.length} items
                    </span>
                )}
            </motion.div>

            {/* Children */}
            <AnimatePresence>
                {isExpanded && hasChildren && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        {item.children.map((child, index) => (
                            <FolderCard key={`${child.name}-${index}`} item={child} level={level + 1} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FolderCard;
