const { google } = require('googleapis');
const config = require('../config/env');

let sheets = null;

const getSheetsClient = () => {
  if (!sheets) {
    try {
      const serviceAccount = require('../config/think2xcreate-43af2ce6257e.json');

      const auth = new google.auth.GoogleAuth({
        credentials: serviceAccount,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      sheets = google.sheets({ version: 'v4', auth });
    } catch (error) {
      console.error('Google Sheets initialization failed:', error);
      throw new Error('Failed to initialize Google Sheets');
    }
  }
  return sheets;
};

const getNextRow = async () => {
  try {
    const sheetsClient = getSheetsClient();
    const range = `${config.google.sheetName || 'Sheet1'}!A:A`;

    const res = await sheetsClient.spreadsheets.values.get({
      spreadsheetId: config.google.sheetId,
      range,
    });

    const rows = res.data.values || [];
    return rows.length + 1;
  } catch (error) {
    console.error('Failed to get next row:', error);
    throw new Error('Row detection failed');
  }
};

const appendToSheet = async (values) => {
  try {
    const sheetsClient = getSheetsClient();
    const sheetName = config.google.sheetName || 'Sheet1';
    const nextRow = await getNextRow();

    // inject S/NO into first column
    values[0] = nextRow - 1; // subtract header row

    const range = `${sheetName}!A${nextRow}:J${nextRow}`;

    const response = await sheetsClient.spreadsheets.values.update({
      spreadsheetId: config.google.sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    });

    return { success: true, updatedRange: response.data.updatedRange };
  } catch (error) {
    console.error('Google Sheets insert failed:', error);
    throw new Error('Failed to save to Google Sheets');
  }
};

const formatContactData = (data) => {
  const createdAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  return [
    '', 
    data.name || '',
    data.email || '',
    data.phone || '',
    data.businessType || '',
    data.service || '',
    data.message || '',
    data.company || '', //  added
    createdAt,
    'pending', //  default status
  ];
};

module.exports = { appendToSheet, formatContactData };