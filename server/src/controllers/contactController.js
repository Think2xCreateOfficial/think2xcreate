const { sendEmail, getContactEmailHTML } = require('../utils/mailer');
const { appendToSheet, formatContactData } = require('../utils/googleSheet'); // was crashing: formatContactData didn't exist

const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, businessType, service, message } = req.body;

    const emailHtml = getContactEmailHTML({ name, email, phone, businessType, service, message });

    await Promise.all([
      sendEmail({ subject: `New Lead: ${name} — ${service}`, html: emailHtml }),
      appendToSheet(formatContactData({ name, email, phone, businessType, service, message })),
    ]);

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactForm };