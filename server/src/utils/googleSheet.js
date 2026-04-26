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


/**
 * Append data safely (NO manual row calculation)
 */
const appendToSheet = async (values) => {
  try {
    const client = getSheetsClient();
    const sheetName = config.google.sheetName || 'Sheet1';
  
    // Use timestamp as S/NO — safe in serverless (no shared row counter state)
    values[0] = Date.now();
  
    // Hard timeout — the googleapis client has no built-in timeout.
    // Without this, a slow OAuth token refresh hangs the function for 300 s.
    const timeoutMs = 15_000;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Google Sheets timed out after ${timeoutMs / 1000}s`)), timeoutMs)
    );
  
    const appendPromise = client.spreadsheets.values.append({
      spreadsheetId: config.google.sheetId,
      range: sheetName,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',  // Never overwrites — always appends a new row
      requestBody: { values: [values] },
    });
  
    const response = await Promise.race([appendPromise, timeoutPromise]);
    return { success: true, updatedRange: response.data.updates.updatedRange };
  } catch (error) {
    console.error(' Google Sheets insert failed:', error.message);
    throw new Error('Failed to save to Google Sheets');
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
    '', // S/NO placeholder (will be filled in append)
    data.name || '',
    data.email || '',
    data.phone || '',
    data.businessType || '',
    data.service || '',
    data.message || '',
    data.company || '',
    createdAt,
    'pending',
  ];
};

module.exports = { appendToSheet, formatContactData };