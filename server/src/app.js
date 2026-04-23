const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { globalLimiter } = require('./middleware/rateLimiter');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contactRoute');
const config = require('./config/env');

const app = express();

app.use(helmet());

// FIX: was cors() with no config — open CORS in production is a security risk
const allowedOrigins = config.allowedOrigins
  ? config.allowedOrigins.split(',').map(o => o.trim())
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server requests (no origin) and whitelisted origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: origin ${origin} not allowed`));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
}));

app.use(express.json({ limit: '10kb' })); // Prevent large payload attacks
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(globalLimiter);

app.use('/api/contact', contactRoutes);

app.get('/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;