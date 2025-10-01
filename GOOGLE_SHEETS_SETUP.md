# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your Meal Planner app, allowing you to store and sync your meal data with a Google Spreadsheet.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- A Google Sheets spreadsheet

## Step 1: Create a Google Cloud Project and Enable Sheets API

1. **Go to Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create a New Project**
   - Click "Select a project" at the top
   - Click "New Project"
   - Give your project a name (e.g., "Meal Planner")
   - Click "Create"

3. **Enable Google Sheets API**
   - In the left sidebar, go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create API Credentials

1. **Go to Credentials**
   - In the left sidebar, go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key (you'll need this later)

2. **Restrict the API Key (Recommended)**
   - Click on the API key you just created
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Sheets API" from the list
   - Under "Website restrictions", add your domain(s)
   - Click "Save"

## Step 3: Set Up Your Google Sheet

1. **Create a New Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com/)
   - Create a new spreadsheet
   - Give it a name (e.g., "Meal Planner Data")

2. **Set Up the Sheet Structure**
   - In the first row, add headers:
     - A1: "Meal Name"
     - B1: "Ingredient 1"
     - C1: "Ingredient 2"
     - D1: "Ingredient 3"
     - E1: "Ingredient 4"
     - F1: "Ingredient 5"
     - (Add more ingredient columns as needed)

3. **Make the Sheet Public (for read access)**
   - Click the "Share" button in the top right
   - Click "Change to anyone with the link"
   - Set permission to "Viewer"
   - Click "Copy link" and save it

4. **Get Your Sheet ID**
   - From the URL of your sheet, copy the ID
   - Example URL: `https://docs.google.com/spreadsheets/d/1ABC123_YOUR_SHEET_ID_456/edit`
   - Your Sheet ID is: `1ABC123_YOUR_SHEET_ID_456`

## Step 4: Configure the App

1. **Edit config.js**
   - Open the `config.js` file in your project
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key
   - Replace `'YOUR_SHEET_ID_HERE'` with your actual Sheet ID

   ```javascript
   const CONFIG = {
     API_KEY: 'AIzaSyC_your_actual_api_key_here',
     SHEET_ID: '1ABC123_your_actual_sheet_id_456',
     SHEET_RANGE: 'Sheet1!A:Z',
     API_BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets'
   };
   ```

## Step 5: Test the Integration

1. **Open your app**
   - Load your `index.html` file in a web browser
   - You should see a "Data Source" section at the top

2. **Enable Google Sheets**
   - Check the "Use Google Sheets" checkbox
   - If configured correctly, you should see "Connected to Google Sheets"
   - If there's an error, check the error message and verify your configuration

3. **Test Adding a Meal**
   - Add a new meal with ingredients
   - Check your Google Sheet to see if the data appears

## Expected Sheet Format

Your Google Sheet should look like this:

| Meal Name | Ingredient 1 | Ingredient 2 | Ingredient 3 | Ingredient 4 | Ingredient 5 |
|-----------|--------------|--------------|--------------|--------------|--------------|
| Spaghetti | pasta        | tomato sauce | ground beef  | parmesan     | basil        |
| Chicken Tacos | chicken | tortillas | lettuce | cheese | salsa |

## Troubleshooting

### Common Issues:

1. **403 Forbidden Error**
   - Check that your API key is correct
   - Ensure the Google Sheets API is enabled in your Google Cloud project
   - Verify API key restrictions aren't blocking your domain

2. **404 Not Found Error**
   - Check that your Sheet ID is correct
   - Ensure the sheet is shared with "Anyone with the link" and set to "Viewer"

3. **Empty Data**
   - Check that your sheet has the correct structure with headers in row 1
   - Ensure there's data in your sheet starting from row 2

4. **CORS Errors**
   - This shouldn't happen with the Google Sheets API, but if it does, check your API key restrictions

### Security Notes:

- **API Key Security**: Since this is a client-side app, your API key will be visible in the source code. Use API key restrictions to limit its usage to your specific domains and the Google Sheets API only.
- **Sheet Privacy**: The sheet needs to be publicly readable for this implementation to work.

## Advanced Configuration

### Custom Sheet Range
If you want to use a different sheet or range, modify the `SHEET_RANGE` in config.js:
```javascript
SHEET_RANGE: 'MySheet!A:F',  // Different sheet name and column range
```

### Multiple Sheets
To support multiple sheets, you would need to modify the service to specify different ranges for different data types.

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all configuration steps above
3. Test with a simple sheet structure first
4. Ensure your Google Cloud project has the Sheets API enabled and your API key is unrestricted initially for testing

## Privacy and Data

- Your meal data will be stored in your Google Sheet
- The app only reads from and writes to the specific sheet you configure
- No data is stored on external servers (besides Google Sheets)
- Your API key should be restricted to prevent unauthorized usage