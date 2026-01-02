'use client';

import { motion } from 'framer-motion';
import FolderCard from './FolderCard';
import Card from '../ui/Card';

const FolderTree = ({ structure }) => {
    if (!structure) {
        return (
            <Card hover={false} className="p-8 text-center">
                <p className="text-gray-400">No folder structure available</p>
            </Card>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
        >
            {/* Root folder */}
            <Card hover={false} className="p-4 overflow-hidden">
                <FolderCard item={structure} level={0} />
            </Card>
        </motion.div>
    );
};

export default FolderTree;
