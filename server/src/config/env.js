let serviceAccount = null;

try {
  serviceAccount = require('./think2xcreate-43af2ce6257e.json');
} catch (error) {
  // Fallback to environment variable if JSON file is missing (common in production/Vercel)
  if (process.env.GOOGLE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    // Fix for private key newlines in environment variables
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
  }
}

require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
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
