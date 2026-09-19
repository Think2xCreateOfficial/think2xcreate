'use strict';

const { sendEmail, getContactEmailHTML } = require('../utils/mailer');
const { appendToSheet, formatContactData } = require('../utils/googleSheet');
const logger = require('../utils/logger');

const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, businessType, service, message } = req.body;

    logger.info('[contact] Processing lead submission', { name, email, phone, businessType, service });

    const emailHtml = getContactEmailHTML({ name, email, phone, businessType, service, message });
    const sheetRow = formatContactData({ name, email, phone, businessType, service, message });

    // Execute Email dispatch and Google Sheet append concurrently
    const [emailResult, sheetResult] = await Promise.allSettled([
      sendEmail({ subject: `New Lead: ${name} — ${service}`, html: emailHtml }),
      appendToSheet(sheetRow),
    ]);

    const emailSent = emailResult.status === 'fulfilled';
    const sheetSaved = sheetResult.status === 'fulfilled';

    if (emailSent) {
      logger.info(`[contact] Email notification sent successfully for ${name}`);
    } else {
      logger.error(`[contact] Email notification failed for ${name}`, emailResult.reason);
    }

    if (sheetSaved) {
      logger.info(`[contact] Google Sheet updated successfully for ${name}`);
    } else {
      logger.error(`[contact] Google Sheet update failed for ${name}`, sheetResult.reason);
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      details: {
        emailSent,
        sheetSaved,
      },
    });
  } catch (error) {
    logger.error('[contact] Controller uncaught exception', error);
    next(error);
  }
};

module.exports = { submitContactForm };



