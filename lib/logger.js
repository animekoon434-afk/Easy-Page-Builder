/**
 * Centralized Error Logger
 * Tags errors by category for better observability
 * 
 * Usage:
 *   import { logger } from '@/lib/logger';
 *   logger.error('auth', 'Failed to authenticate user', { userId });
 *   logger.warn('db', 'Connection slow', { latency: 500 });
 *   logger.info('api', 'Project created', { projectId });
 */

const LOG_LEVELS = {
    ERROR: 'ERROR',
    WARN: 'WARN',
    INFO: 'INFO',
    DEBUG: 'DEBUG',
};

const TAGS = {
    AUTH: 'auth',
    DB: 'db',
    API: 'api',
    UI: 'ui',
    VALIDATION: 'validation',
};

/**
 * Format log message with timestamp and tag
 */
const formatMessage = (level, tag, message, meta = {}) => {
    const timestamp = new Date().toISOString();
    const metaString = Object.keys(meta).length > 0 ? ` | ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] [${level}] [${tag.toUpperCase()}] ${message}${metaString}`;
};

/**
 * Logger object with methods for each log level
 */
export const logger = {
    /**
     * Log an error
     * @param {string} tag - Category tag (auth, db, api, ui, validation)
     * @param {string} message - Error message
     * @param {object} meta - Additional metadata
     */
    error: (tag, message, meta = {}) => {
        const formattedMessage = formatMessage(LOG_LEVELS.ERROR, tag, message, meta);
        console.error(formattedMessage);

        // Future: Send to external logging service (Sentry, LogRocket, etc.)
        // if (typeof window === 'undefined') {
        //     // Server-side: send to logging service
        // }
    },

    /**
     * Log a warning
     */
    warn: (tag, message, meta = {}) => {
        const formattedMessage = formatMessage(LOG_LEVELS.WARN, tag, message, meta);
        console.warn(formattedMessage);
    },

    /**
     * Log info
     */
    info: (tag, message, meta = {}) => {
        const formattedMessage = formatMessage(LOG_LEVELS.INFO, tag, message, meta);
        console.info(formattedMessage);
    },

    /**
     * Log debug (only in development)
     */
    debug: (tag, message, meta = {}) => {
        if (process.env.NODE_ENV === 'development') {
            const formattedMessage = formatMessage(LOG_LEVELS.DEBUG, tag, message, meta);
            console.debug(formattedMessage);
        }
    },
};

// Export tags for consistent usage
export { TAGS };

export default logger;
