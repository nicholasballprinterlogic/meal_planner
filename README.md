# Meal Planner

A React-based meal planning application that helps you organize your meals and generate grocery lists.

## Features

- 📋 Plan meals from a database of 113+ meal options
- 🎲 Random meal generation
- 🛒 Automatic grocery list creation
- ➕ Add new meals with ingredients
- ✏️ Edit existing meals
- 🔄 Replace individual meals in your plan

## Demo

Visit the live application: [https://nickball12.github.io/meal_planner/](https://nickball12.github.io/meal_planner/)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/nickball12/meal_planner.git
   cd meal_planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a new deployment.

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

## Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## How to Use

1. **Set Meal Count**: Choose how many meals you want to plan (1-14)
2. **Generate Plan**: Click "Generate New Plan" to get random meals
3. **Replace Meals**: Click "Replace" next to any meal to get a different option
4. **Add Meals**: Use the "Add New Meal" button to expand your database
5. **Edit Meals**: Click "Edit" next to any meal to modify it
6. **Grocery List**: Add ingredients to meals to generate shopping lists

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.