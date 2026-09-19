'use strict';

const nodemailer = require('nodemailer');
const config = require('../config/env');
const logger = require('./logger');

let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
      family: 4, // Force IPv4 connection to prevent IPv6 socket hangs
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      pool: false,
    });
  }
  return transporter;
};

const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  try {
    if (!config.email.user || !config.email.pass) {
      logger.warn('[mailer] Skipping email send — EMAIL_USER or EMAIL_PASS missing');
      return { success: false, reason: 'Email credentials not configured' };
    }

    const t = getTransporter();
    const recipient = to || config.email.receiver || config.email.user;

    const timeoutMs = 15_000;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Email timed out after ${timeoutMs / 1000}s`)), timeoutMs)
    );

    const sendPromise = t.sendMail({
      from: `"Think2X Create" <${config.email.user}>`,
      to: recipient,
      subject,
      html,
      attachments,
    });

    const info = await Promise.race([sendPromise, timeoutPromise]);
    logger.info(`[mailer] Email successfully dispatched to ${recipient} (ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    logger.error('[mailer] Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.message || 'SMTP Error'}`);
  }
};

// service and businessType were passed in but never rendered in the template
const getContactEmailHTML = ({ name, email, phone, businessType, service, message }) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { text-decoration: none; }
      body { font-family: Arial, sans-serif; line-height: 1.6; background: #f4f4f4; margin: 0; padding: 0; }
      .wrapper { max-width: 620px; margin: 30px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.08); }
      .header { background: #ffea00ff; color: #252222; padding: 20px 24px; }
      .header h2 { margin: 0; font-size: 20px; }
      .header span { font-size: 13px; opacity: .7; }
      .body { padding: 24px; }
      .field { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f0f0f0; }
      .field:last-child { border-bottom: none; margin-bottom: 0; }
      .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #888; letter-spacing: .5px; }
      .value { margin-top: 4px; font-size: 15px; color: #222; }
      .badge { display: inline-block; background: #fef9c3; color: #854d0e; font-size: 13px; font-weight: 600; padding: 2px 10px; border-radius: 99px; }
      .footer { background: #f8f8f8; padding: 14px 24px; font-size: 12px; color: #aaa; text-align: center; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h2>New Lead Form Submission</h2>
        <span>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
      </div>
      <div class="body">
        <div class="field">
          <div class="label">Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="value">${email}</div>
        </div>
        <div class="field">
          <div class="label">Phone</div>
          <div class="value">${phone}</div>
        </div>
        <div class="field">
          <div class="label">Business Type</div>
          <div class="value">${businessType}</div>
        </div>
        <div class="field">
          <div class="label">Service Interested In</div>
          <div class="value"><span class="badge">${service}</span></div>
        </div>
        ${message ? `
        <div class="field">
          <div class="label">Message / Goals</div>
          <div class="value">${message.replace(/\n/g, '<br>')}</div>
        </div>` : ''}
      </div>
      <div style="padding: 20px 24px; display: flex; text-align: center;">
        <a href="tel:${phone}" 
            style="
            display: block;
            flex: 1;
            margin: 6px;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 600;
            color: #252222;
            background-color: #ffea00ff;
            border-radius: 6px;
            text-decoration: none;
            ">
             Call
        </a>

        <a href="mailto:${email}" 
            style="
            display: block;
            flex: 1;
            margin: 6px;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 600;
            color: #252222;
            border: 2px solid #ffea00ff;
            border-radius: 6px;
            text-decoration: none;
            ">
            Email
        </a>

        </div>
      <div class="footer">Submitted via Think2X Create website lead form</div>
    </div>
  </body>
  </html>
`;

module.exports = { sendEmail, getContactEmailHTML };