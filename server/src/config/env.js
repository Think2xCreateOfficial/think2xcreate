const serviceAccount = require('./think2xcreate-43af2ce6257e.json');
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || 'development',
  allowedOrigins: process.env.ALLOWED_ORIGINS,
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    receiver: process.env.RECEIVER_EMAIL,
  },
  
  google: {
    sheetId: process.env.GOOGLE_SHEET_ID,
    sheetName: process.env.GOOGLE_SHEET_NAME,
    serviceAccount: serviceAccount,
  },
  
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5,
  },
};