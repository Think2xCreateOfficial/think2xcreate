const { body, validationResult } = require('express-validator');

// Honeypot: bots fill hidden fields, real users don't
const honeypot = (req, res, next) => {
  if (req.body.website || req.body.confirm_email) {
    // Silently succeed so bots don't know they were caught
    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  }
  next();
};

const ALLOWED_BUSINESS_TYPES = [
  'Retail Shop', 'Restaurant', 'Ecommerce', 'E-commerce', 'Service Business',
  'Startup', 'Small Business', 'Medium Business', 'Enterprise', 'Personal Brand', 'Other'
];

const ALLOWED_SERVICES = [
  'Meta Ads', 'Social Media Marketing', 'Social Media Management', 'Social Media',
  'SEO', 'Content', 'Content Creation', 'Video & Photo Editing', 'Photo & Video Editing',
  'Poster & Graphic Design', 'Full Digital Package', 'Website Development', 'Google Ads',
  'Branding & Design', 'Other'
];

const validateLeadForm = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^\+?[\d\s\-]{10,}$/).withMessage('Enter a valid phone number'),

  body('businessType')
    .trim()
    .notEmpty().withMessage('Please select a business type')
    .custom((val) => {
      const isValid = ALLOWED_BUSINESS_TYPES.some(
        (allowed) => allowed.toLowerCase() === val.toLowerCase()
      );
      if (!isValid) {
        throw new Error('Invalid business type');
      }
      return true;
    }),

  body('service')
    .trim()
    .notEmpty().withMessage('Please select a service')
    .custom((val) => {
      // Handles both single service and comma-separated multi-select services
      const services = val.split(',').map((s) => s.trim()).filter(Boolean);
      if (services.length === 0) {
        throw new Error('Please select at least one service');
      }
      const allValid = services.every((s) =>
        ALLOWED_SERVICES.some((allowed) => allowed.toLowerCase() === s.toLowerCase())
      );
      if (!allValid) {
        throw new Error('Invalid service selection');
      }
      return true;
    }),

  body('message')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 }).withMessage('Message too long'),

  // Run validation and return structured errors
  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = {};
      result.array().forEach(({ path, msg }) => {
        if (!errors[path]) errors[path] = msg;
      });
      return res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }
    next();
  },
];

module.exports = { validateLeadForm, honeypot };