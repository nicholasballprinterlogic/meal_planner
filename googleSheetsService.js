// Google Sheets API Service
// This service handles reading from and writing to Google Sheets

class GoogleSheetsService {
  constructor() {
    this.config = window.CONFIG;
    this.isLoading = false;
  }

  /**
   * Read data from Google Sheets
   * @returns {Promise<Array>} Array of meal objects
   */
  async readMeals() {
    if (!this.config.API_KEY || !this.config.SHEET_ID) {
      throw new Error('Please configure your Google Sheets API key and Sheet ID in config.js');
    }

    this.isLoading = true;
    
    try {
      const url = `${this.config.API_BASE_URL}/${this.config.SHEET_ID}/values/${this.config.SHEET_RANGE}?key=${this.config.API_KEY}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('API key is invalid or doesn\'t have permission to access this sheet');
        } else if (response.status === 404) {
          throw new Error('Sheet not found. Check your Sheet ID');
        } else {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
      }

      const data = await response.json();
      
      if (!data.values || data.values.length === 0) {
        return [];
      }

      // Convert sheet data to meal objects
      const meals = data.values.slice(1).map(row => {
        if (!row[0] || row[0].trim() === '') return null;
        
        return {
          name: row[0].trim(),
          ingredients: row.slice(1).filter(ingredient => 
            ingredient && ingredient.trim() !== ''
          ).map(ingredient => ingredient.trim())
        };
      }).filter(meal => meal !== null);

      return meals;
    } catch (error) {
      console.error('Error reading from Google Sheets:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Write a new meal to Google Sheets
   * @param {Object} meal - Meal object with name and ingredients
   * @returns {Promise<boolean>} Success status
   */
  async addMeal(meal) {
    if (!this.config.API_KEY || !this.config.SHEET_ID) {
      throw new Error('Please configure your Google Sheets API key and Sheet ID in config.js');
    }

    try {
      // First, get current data to find the next empty row
      const currentMeals = await this.readMeals();
      const nextRow = currentMeals.length + 2; // +2 because we start from row 2 (after header)
      
      const rowData = [meal.name, ...meal.ingredients];
      
      const url = `${this.config.API_BASE_URL}/${this.config.SHEET_ID}/values/Sheet1!A${nextRow}:append?valueInputOption=RAW&key=${this.config.API_KEY}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to add meal: ${response.status} ${response.statusText}`);
      }

      return true;
    } catch (error) {
      console.error('Error adding meal to Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Update an existing meal in Google Sheets
   * @param {number} rowIndex - The row index (0-based) of the meal to update
   * @param {Object} meal - Updated meal object
   * @returns {Promise<boolean>} Success status
   */
  async updateMeal(rowIndex, meal) {
    if (!this.config.API_KEY || !this.config.SHEET_ID) {
      throw new Error('Please configure your Google Sheets API key and Sheet ID in config.js');
    }

    try {
      const sheetRow = rowIndex + 2; // +2 because we start from row 2 (after header)
      const rowData = [meal.name, ...meal.ingredients];
      
      // Clear the row first by getting the current range
      const clearUrl = `${this.config.API_BASE_URL}/${this.config.SHEET_ID}/values/Sheet1!A${sheetRow}:Z${sheetRow}:clear?key=${this.config.API_KEY}`;
      
      const clearResponse = await fetch(clearUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!clearResponse.ok) {
        throw new Error(`Failed to clear row: ${clearResponse.status} ${clearResponse.statusText}`);
      }

      // Now update with new data
      const updateUrl = `${this.config.API_BASE_URL}/${this.config.SHEET_ID}/values/Sheet1!A${sheetRow}?valueInputOption=RAW&key=${this.config.API_KEY}`;
      
      const updateResponse = await fetch(updateUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      });

      if (!updateResponse.ok) {
        throw new Error(`Failed to update meal: ${updateResponse.status} ${updateResponse.statusText}`);
      }

      return true;
    } catch (error) {
      console.error('Error updating meal in Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Initialize the sheet with headers if it's empty
   * @returns {Promise<boolean>} Success status
   */
  async initializeSheet() {
    try {
      const meals = await this.readMeals();
      
      // If sheet is completely empty, add headers
      if (meals.length === 0) {
        const url = `${this.config.API_BASE_URL}/${this.config.SHEET_ID}/values/Sheet1!A1?valueInputOption=RAW&key=${this.config.API_KEY}`;
        
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [['Meal Name', 'Ingredient 1', 'Ingredient 2', 'Ingredient 3', 'Ingredient 4', 'Ingredient 5']]
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to initialize sheet: ${response.status} ${response.statusText}`);
        }
      }
      
      return true;
    } catch (error) {
      console.error('Error initializing sheet:', error);
      throw error;
    }
  }
}

// Export for use in other files
window.GoogleSheetsService = GoogleSheetsService;