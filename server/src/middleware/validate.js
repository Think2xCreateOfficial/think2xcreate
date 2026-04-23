const { body, validationResult } = require('express-validator');

// Honeypot: bots fill hidden fields, real users don't
const honeypot = (req, res, next) => {
  if (req.body.website || req.body.confirm_email) {
    // Silently succeed so bots don't know they were caught
    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  }
  next();
};

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
    .isIn(['Retail Shop', 'Restaurant', 'Ecommerce', 'Service Business', 'Startup', 'Other'])
    .withMessage('Invalid business type'),

  body('service')
    .trim()
    .notEmpty().withMessage('Please select a service')
    .isIn(['Meta Ads', 'Social Media Marketing', 'SEO', 'Content', 'Video & Photo Editing', 'Full Digital Package', 'Website Development'])
    .withMessage('Invalid service selection'),

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