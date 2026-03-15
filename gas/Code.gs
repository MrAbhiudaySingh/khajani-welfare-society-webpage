// Google Apps Script for Khajani Welfare Society Volunteer Form
// Copy this entire code into Google Apps Script (script.google.com)
// Then deploy as a web app

const SHEET_ID = '1K11sm6gUg-R120Djk5yarQhT75XoY5ny8TiJMHYgJeM';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  // Handle CORS preflight
  if (e.parameter.method === 'OPTIONS') {
    return handleCORS();
  }

  try {
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Add timestamp
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    
    // Append data to sheet
    // Column order: Timestamp, Full Name, Email, Interest, Available From, Motivation
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.interest || '',
      data.availableFrom || '',
      data.motivation || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Thank you for your application! We will reach out to schedule an orientation.' 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'Volunteer form API is running' }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*'
    });
}

function handleCORS() {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}
