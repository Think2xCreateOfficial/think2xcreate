const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const { validateLeadForm, honeypot } = require('../middleware/validate'); // FIX: was validateWorkshop
const { formLimiter } = require('../middleware/rateLimiter');

router.post(
  '/',
  formLimiter,
  honeypot,
  validateLeadForm,
  submitContactForm
);

module.exports = router;