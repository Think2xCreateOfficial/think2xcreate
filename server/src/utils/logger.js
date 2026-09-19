'use strict';

/**
 * Industry-Standard Production Logger Utility
 * Provides structured, timestamped logs for monitoring and production observability.
 */
const formatTimestamp = () => new Date().toISOString();

const logger = {
  info: (message, meta = '') => {
    const metaStr = meta ? ` | ${typeof meta === 'object' ? JSON.stringify(meta) : meta}` : '';
    console.log(`[${formatTimestamp()}] [INFO] ${message}${metaStr}`);
  },

  warn: (message, meta = '') => {
    const metaStr = meta ? ` | ${typeof meta === 'object' ? JSON.stringify(meta) : meta}` : '';
    console.warn(`[${formatTimestamp()}] [WARN] ${message}${metaStr}`);
  },

  error: (message, error = null) => {
    const errStr = error
      ? ` | Error: ${error.stack || error.message || JSON.stringify(error)}`
      : '';
    console.error(`[${formatTimestamp()}] [ERROR] ${message}${errStr}`);
  },

  http: (method, url, status, durationMs) => {
    console.log(`[${formatTimestamp()}] [HTTP] ${method} ${url} ${status} - ${durationMs}ms`);
  },
};

module.exports = logger;
