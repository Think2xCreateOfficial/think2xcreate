'use strict';

const rateLimit = require('express-rate-limit');

// Global limiter — applied to all routes
// trust proxy is set in app.js so req.ip is correctly populated by the time
// these middlewares run (no more ERR_ERL_UNDEFINED_IP_ADDRESS)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

// Tighter limiter for the contact form to prevent spam
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many form submissions, please try again in an hour.' },
});

module.exports = { globalLimiter, formLimiter };
