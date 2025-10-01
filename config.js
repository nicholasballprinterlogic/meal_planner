// Google Sheets API Configuration
// You'll need to replace these values with your actual Google Sheets details

const CONFIG = {
  // Your Google Sheets API Key (create one in Google Cloud Console)
  API_KEY: 'YOUR_API_KEY_HERE',
  
  // Your Google Sheet ID (from the URL of your sheet)
  // Example: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
  SHEET_ID: 'YOUR_SHEET_ID_HERE',
  
  // The range in your sheet where meal data is stored
  // Expected format: Column A = Meal Name, Column B and beyond = Ingredients
  SHEET_RANGE: 'Sheet1!A:Z',
  
  // Google Sheets API endpoint
  API_BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets'
};

// Export for use in other files
window.CONFIG = CONFIG;