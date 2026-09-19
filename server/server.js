const app = require('./src/app');
const config = require('./src/config/env');

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`Server running url: http://localhost:${config.port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n Error: Port ${config.port} is already in use by another process.`);
    console.error(`Please stop any existing process on port ${config.port} or set a different port in .env (e.g., PORT=5001).\n`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

module.exports = server;