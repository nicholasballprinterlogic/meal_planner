# Google Sheets OAuth2 Integration Setup Guide

This guide will help you set up Google Sheets OAuth2 integration for your Meal Planner app, allowing users to securely authenticate and sync their meal data with a Google Spreadsheet with full read/write access.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- A Google Sheets spreadsheet

## Step 1: Create a Google Cloud Project and Enable APIs

1. **Go to Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create a New Project**
   - Click "Select a project" at the top
   - Click "New Project"
   - Give your project a name (e.g., "Meal Planner OAuth2")
   - Click "Create"

3. **Enable Google Sheets API**
   - In the left sidebar, go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create OAuth2 Credentials

1. **Configure OAuth Consent Screen**
   - In the left sidebar, go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type (unless you have a Google Workspace)
   - Fill in the required information:
     - App name: "Meal Planner"
     - User support email: Your email
     - Developer contact information: Your email
   - Add scopes: `https://www.googleapis.com/auth/spreadsheets`
   - Add test users (your email and any other users who will test the app)
   - Click "Save and Continue"

2. **Create OAuth2 Client ID**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Give it a name (e.g., "Meal Planner Web Client")
   - Add authorized JavaScript origins:
     - `http://localhost` (for local testing)
     - `https://yourdomain.com` (for production)
     - `https://yourname.github.io` (if using GitHub Pages)
   - Add authorized redirect URIs:
     - `http://localhost/index.html` (for local testing)
     - `https://yourdomain.com/index.html` (for production)
     - `https://yourname.github.io/meal_planner/index.html` (if using GitHub Pages)
   - Click "Create"
   - Copy the Client ID (you'll need this in the next step)

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

3. **Get Your Sheet ID**
   - From the URL of your sheet, copy the ID
   - Example URL: `https://docs.google.com/spreadsheets/d/1ABC123_YOUR_SHEET_ID_456/edit`
   - Your Sheet ID is: `1ABC123_YOUR_SHEET_ID_456`

## Step 4: Configure the App

1. **Edit the CONFIG section in index.html**
   - Open the `index.html` file in your project
   - Find the CONFIG section in the JavaScript code
   - Replace `'YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com'` with your actual OAuth2 Client ID
   - Replace the SHEET_ID if you want to use a different sheet

   ```javascript
   const CONFIG = {
     SHEET_ID: '1SaP6Xl0Noi3RTBvuk5Rwthrh83_of4MlxFF6ZT3KHAc',
     OAUTH_CLIENT_ID: 'your-actual-client-id.apps.googleusercontent.com',
     SHEET_RANGE: 'Sheet1!A:Z',
     API_BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets',
     OAUTH_SCOPES: 'https://www.googleapis.com/auth/spreadsheets'
   };
   ```

## Step 5: Test the Integration

1. **Open your app**
   - Load your `index.html` file in a web browser
   - You should see a "Data Source" section at the top

2. **Enable Google Sheets and Sign In**
   - Check the "Use Google Sheets" checkbox
   - Click "Sign in with Google"
   - You'll be redirected to Google's authentication page
   - Grant permission to access your Google Sheets
   - You should be redirected back to your app

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

1. **OAuth2 Authentication Errors**
   - Check that your Client ID is correct in the CONFIG section
   - Ensure your domain is added to authorized JavaScript origins
   - Verify that the OAuth consent screen is properly configured
   - Make sure you've added the Google Sheets API scope

2. **Permission Denied Errors**
   - Ensure the OAuth consent screen includes the correct scopes
   - Verify that the user has granted permission to access Google Sheets
   - Check that the Google Sheets API is enabled in your project

3. **Sheet Not Found Errors**
   - Check that your Sheet ID is correct in the CONFIG section
   - Ensure the sheet exists and is accessible by the authenticated user

4. **CORS Errors**
   - Make sure your domain is listed in the authorized JavaScript origins
   - For local testing, use `http://localhost` (not `http://127.0.0.1`)

### Security Notes:

- **OAuth2 Security**: OAuth2 is much more secure than API keys as tokens are temporary and user-specific
- **Scope Limitations**: The app only requests access to Google Sheets, not other Google services
- **User Control**: Users can revoke access at any time through their Google account settings

## Advanced Configuration

### Custom Sheet Range
If you want to use a different sheet or range, modify the `SHEET_RANGE` in the CONFIG:
```javascript
SHEET_RANGE: 'MySheet!A:F',  // Different sheet name and column range
```

### Production Deployment
For production deployment:
1. Add your production domain to authorized JavaScript origins
2. Update redirect URIs to match your production URLs
3. Consider publishing your OAuth consent screen (requires verification for external users)

## Privacy and Data

- Your meal data is stored in the user's own Google Sheet
- The app only accesses sheets that the user explicitly grants permission for
- No data is stored on external servers (besides the user's Google Sheets)
- Users can revoke access at any time through Google account settings
- Authentication tokens are temporary and automatically refreshed

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all configuration steps above
3. Test with a simple sheet structure first
4. Ensure your Google Cloud project has the Sheets API enabled
5. Check that OAuth consent screen is properly configured

## Benefits of OAuth2 vs API Keys

- **Security**: No need to share API keys; users authenticate directly with Google
- **Permissions**: Users explicitly grant permission for specific scopes
- **Write Access**: Full read/write access to Google Sheets
- **User Experience**: Seamless sign-in flow with Google authentication
- **Revocable**: Users can revoke access at any time
- **Temporary Tokens**: Access tokens expire automatically for security