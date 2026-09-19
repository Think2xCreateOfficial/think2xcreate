'use strict';

const { google } = require('googleapis');
const config = require('../config/env');

let sheetsClient = null;

/**
 * Get Google Sheets client (safe for both local + Vercel)
 */
const getSheetsClient = () => {
  if (!sheetsClient) {
    const serviceAccount = config.google.serviceAccount;
    if (!serviceAccount) {
      throw new Error('Google Service Account credentials missing or invalid JSON');
    }
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    sheetsClient = google.sheets({ version: 'v4', auth });
  }
  return sheetsClient;
};


const logger = require('./logger');

/**
 * Inserts data into the next immediate consecutive empty row (NO blank rows skipped)
 */
const appendToSheet = async (values) => {
  try {
    const client = getSheetsClient();
    const spreadsheetId = config.google.sheetId;
    const sheetName = config.google.sheetName || 'leadform';

    const timeoutMs = 15_000;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Google Sheets timed out after ${timeoutMs / 1000}s`)), timeoutMs)
    );

    const appendPromise = client.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:J`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    });

    const response = await Promise.race([appendPromise, timeoutPromise]);
    const updatedRange = response.data?.updates?.updatedRange || 'Unknown';
    logger.info(`[googleSheet] Successfully inserted lead into Google Sheet range: ${updatedRange}`);
    return { success: true, updatedRange };
  } catch (error) {
    logger.error('[googleSheet] Insert failed:', error.message || error);
    throw new Error(`Failed to save to Google Sheets: ${error.message || 'API Error'}`);
  }
};

/**
 * Format incoming data (unchanged structure)
 */
const formatContactData = (data) => {
  const createdAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  return [
    '=ROW()-1', // S/NO 
    data.name || '',
    data.email || '',
    data.phone || '',
    data.businessType || '',
    data.service || '',
    data.message || '',
    data.company || '',
    createdAt,
    'Pending',
  ];
};

module.exports = { appendToSheet, formatContactData };