'use strict';

const { sendEmail, getContactEmailHTML } = require('../utils/mailer');
const { appendToSheet, formatContactData } = require('../utils/googleSheet');

const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, businessType, service, message } = req.body;

    const emailHtml = getContactEmailHTML({ name, email, phone, businessType, service, message });
    const sheetRow = formatContactData({ name, email, phone, businessType, service, message });

    const [emailResult, sheetResult] = await Promise.allSettled([
      sendEmail({ subject: `New Lead: ${name} — ${service}`, html: emailHtml }),
      appendToSheet(sheetRow),
    ]);

    if (emailResult.status === 'rejected') {
      console.error('[contact] Email failed:', emailResult.reason?.message);
    }
    if (sheetResult.status === 'rejected') {
      console.error('[contact] Google Sheets failed:', sheetResult.reason?.message);
    }

    // Only surface a 500 if both channels failed simultaneously
    if (emailResult.status === 'rejected' && sheetResult.status === 'rejected') {
      const err = new Error('All notification channels failed — lead not captured');
      err.status = 502;
      return next(err);
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactForm };
