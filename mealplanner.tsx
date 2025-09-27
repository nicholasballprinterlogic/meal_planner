import React, { useState, useEffect } from 'react';
import { Shuffle, ShoppingCart, Plus, X, RefreshCw, Save, Edit } from 'lucide-react';

const MealPlanner = () => {
  // Your historic meals
  const sampleMeals = [
    { name: "Ahi tuna salad", ingredients: [] },
    { name: "Alfredo chicken", ingredients: [] },
    { name: "Alfredo meatballs", ingredients: [] },
    { name: "Baby back ribs", ingredients: [] },
    { name: "Bacon Wrapped chicken", ingredients: [] },
    { name: "Bacon Wrapped pork loin", ingredients: [] },
    { name: "Baked feta pasta", ingredients: [] },
    { name: "Baked Potato", ingredients: [] },
    { name: "Baked ziti", ingredients: [] },
    { name: "Bbq kielbasa", ingredients: [] },
    { name: "Beef and broccoli", ingredients: [] },
    { name: "Beer brats", ingredients: [] },
    { name: "Biscuits and Gravy", ingredients: [] },
    { name: "Blackened Salmon", ingredients: [] },
    { name: "Brats", ingredients: [] },
    { name: "Breakfast Skillet", ingredients: [] },
    { name: "Brisket", ingredients: [] },
    { name: "Bulgogi Sauce Meatballs", ingredients: [] },
    { name: "Burger bowls", ingredients: [] },
    { name: "Burrito bowls", ingredients: [] },
    { name: "Burritos", ingredients: [] },
    { name: "Butter chicken", ingredients: [] },
    { name: "Cajun shrimp alfredo", ingredients: [] },
    { name: "Chef Salad", ingredients: [] },
    { name: "Chicken and shrimp tacos", ingredients: [] },
    { name: "Chicken bacon carbonara", ingredients: [] },
    { name: "Chicken Caesar Salad", ingredients: [] },
    { name: "Chicken cordon bleu", ingredients: [] },
    { name: "Chicken Fried steak", ingredients: [] },
    { name: "Chicken Marinara", ingredients: [] },
    { name: "Chicken Noodle Soup", ingredients: [] },
    { name: "Chicken Quesadilla", ingredients: [] },
    { name: "Chicken Sandwiches", ingredients: [] },
    { name: "Chicken taco", ingredients: [] },
    { name: "Chicken teriyaki", ingredients: [] },
    { name: "Chicken tort alfredo", ingredients: [] },
    { name: "Chili - Traditional", ingredients: [] },
    { name: "Chili verde", ingredients: [] },
    { name: "Chuck Pot Roast", ingredients: [] },
    { name: "Crab legs", ingredients: [] },
    { name: "Creamy Tostadas", ingredients: [] },
    { name: "Crispy Franks redhot chicken (hello)", ingredients: [] },
    { name: "Fajita bowl", ingredients: [] },
    { name: "Fajitas", ingredients: [] },
    { name: "Flautas (hello)", ingredients: [] },
    { name: "French Dip", ingredients: [] },
    { name: "General Tso", ingredients: [] },
    { name: "Grilled Chicken", ingredients: [] },
    { name: "Grilled Chicken thighs", ingredients: [] },
    { name: "Grilled Sammies", ingredients: [] },
    { name: "Hamburgers", ingredients: [] },
    { name: "Hibachi filet mignon", ingredients: [] },
    { name: "Hibachi Stir Fry", ingredients: [] },
    { name: "Honey garlic pork chops", ingredients: [] },
    { name: "Honey sriracha chicken", ingredients: [] },
    { name: "Hot Dogs", ingredients: [] },
    { name: "Italian Chicken pasta", ingredients: [] },
    { name: "Kabobs", ingredients: [] },
    { name: "Kielbasa in vodka sauce", ingredients: [] },
    { name: "Kung Pao chicken", ingredients: [] },
    { name: "Lasagna", ingredients: [] },
    { name: "Lobster", ingredients: [] },
    { name: "Meat Loaf", ingredients: [] },
    { name: "Meatballs", ingredients: [] },
    { name: "Minestrone Soup", ingredients: [] },
    { name: "Mongolian beef", ingredients: [] },
    { name: "Navajo Tacos", ingredients: [] },
    { name: "Orange Chicken", ingredients: [] },
    { name: "Pepper steak", ingredients: [] },
    { name: "Pesto Chicken", ingredients: [] },
    { name: "Philly cheese steaks", ingredients: [] },
    { name: "Pizza", ingredients: [] },
    { name: "Poke", ingredients: [] },
    { name: "Pork bulgogi bowls (hello)", ingredients: [] },
    { name: "Pork Flautas", ingredients: [] },
    { name: "Pork Tenderloin", ingredients: [] },
    { name: "Pot Pie", ingredients: [] },
    { name: "Pot roast", ingredients: [] },
    { name: "Potato Soup", ingredients: [] },
    { name: "pulled pork", ingredients: [] },
    { name: "pulled pork pitas", ingredients: [] },
    { name: "Red beans and rice", ingredients: [] },
    { name: "Rib eye steaks", ingredients: [] },
    { name: "Ribs", ingredients: [] },
    { name: "Salmon", ingredients: [] },
    { name: "Shake and Bake", ingredients: [] },
    { name: "Shrimp burrito", ingredients: [] },
    { name: "Shrimp scampi", ingredients: [] },
    { name: "Sloppy joes", ingredients: [] },
    { name: "Soup And Sandwiches", ingredients: [] },
    { name: "South west pasta", ingredients: [] },
    { name: "Spaghetti", ingredients: [] },
    { name: "Spicy Kielbasa pasta", ingredients: [] },
    { name: "Steak & lobster", ingredients: [] },
    { name: "Steak & potatoes", ingredients: [] },
    { name: "Steak burgers", ingredients: [] },
    { name: "Stevie Feel good", ingredients: [] },
    { name: "Stew", ingredients: [] },
    { name: "Stir fry", ingredients: [] },
    { name: "Stuffed Peppers", ingredients: [] },
    { name: "Stuffed shells", ingredients: [] },
    { name: "Sweet and sour chicken", ingredients: [] },
    { name: "Sweet chili chicken (every plate)", ingredients: [] },
    { name: "Sweet fire chicken", ingredients: [] },
    { name: "Sweet pork", ingredients: [] },
    { name: "Sweet pork burritos", ingredients: [] },
    { name: "Szechuan beef noodles (hello)", ingredients: [] },
    { name: "Taco Mac", ingredients: [] },
    { name: "Taco Salad", ingredients: [] },
    { name: "Taco soup", ingredients: [] },
    { name: "Tamale pie", ingredients: [] },
    { name: "Tamales", ingredients: [] },
    { name: "Tater Tot Casserole", ingredients: [] },
    { name: "Thai coconut pork meatballs (Hello)", ingredients: [] },
    { name: "Thick pork chops", ingredients: [] },
    { name: "Thin pork chops", ingredients: [] },
    { name: "Tortellini soup", ingredients: [] },
    { name: "Tots and gravy", ingredients: [] },
    { name: "Tri-Tip", ingredients: [] },
    { name: "Tuscany tort", ingredients: [] },
    { name: "Waffles", ingredients: [] },
    { name: "Walking tacos", ingredients: [] },
    { name: "White Chicken Chilli", ingredients: [] },
    { name: "White gravy pork chops", ingredients: [] },
    { name: "Whole roasted chicken", ingredients: [] },
    { name: "Chicken Bacon ranch pasta", ingredients: [] }
  ];

  const [mealCount, setMealCount] = useState(7);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [showGroceryList, setShowGroceryList] = useState(false);
  const [allMeals, setAllMeals] = useState(sampleMeals);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [newMealName, setNewMealName] = useState('');
  const [newMealIngredients, setNewMealIngredients] = useState(['']);
  const [editingMealIndex, setEditingMealIndex] = useState(-1);
  const [showMealList, setShowMealList] = useState(false);

  // Add a new ingredient input field
  const addIngredientField = () => {
    setNewMealIngredients([...newMealIngredients, '']);
  };

  // Remove an ingredient input field
  const removeIngredientField = (index) => {
    const filtered = newMealIngredients.filter((_, i) => i !== index);
    setNewMealIngredients(filtered.length > 0 ? filtered : ['']);
  };

  // Update ingredient at specific index
  const updateIngredient = (index, value) => {
    const updated = [...newMealIngredients];
    updated[index] = value;
    setNewMealIngredients(updated);
  };

  // Start editing a meal
  const startEditMeal = (index) => {
    const meal = allMeals[index];
    setNewMealName(meal.name);
    setNewMealIngredients(meal.ingredients.length > 0 ? meal.ingredients : ['']);
    setEditingMealIndex(index);
    setShowAddMeal(true);
  };

  // Save new meal or update existing
  const saveNewMeal = () => {
    if (newMealName.trim()) {
      const filteredIngredients = newMealIngredients.filter(ing => ing.trim() !== '');
      const mealData = {
        name: newMealName.trim(),
        ingredients: filteredIngredients
      };
      
      if (editingMealIndex >= 0) {
        // Update existing meal
        const updatedMeals = [...allMeals];
        updatedMeals[editingMealIndex] = mealData;
        setAllMeals(updatedMeals);
        
        // Update selected meals if the edited meal is currently selected
        setSelectedMeals(prev => 
          prev.map(meal => 
            meal.name === allMeals[editingMealIndex].name ? mealData : meal
          )
        );
      } else {
        // Add new meal
        setAllMeals([...allMeals, mealData]);
      }
      
      resetMealForm();
    }
  };

  // Reset the meal form
  const resetMealForm = () => {
    setNewMealName('');
    setNewMealIngredients(['']);
    setShowAddMeal(false);
    setEditingMealIndex(-1);
  };

  // Cancel adding/editing meal
  const cancelAddMeal = () => {
    resetMealForm();
  };

  // Generate random meals
  const generateRandomMeals = () => {
    const shuffled = [...allMeals].sort(() => 0.5 - Math.random());
    setSelectedMeals(shuffled.slice(0, mealCount));
    setShowGroceryList(false);
  };

  // Replace a specific meal
  const replaceMeal = (index) => {
    const usedMealNames = selectedMeals.map(meal => meal.name);
    const availableMeals = allMeals.filter(meal => !usedMealNames.includes(meal.name));
    
    if (availableMeals.length > 0) {
      const randomMeal = availableMeals[Math.floor(Math.random() * availableMeals.length)];
      const newMeals = [...selectedMeals];
      newMeals[index] = randomMeal;
      setSelectedMeals(newMeals);
    }
  };

  // Generate grocery list
  const generateGroceryList = () => {
    const allIngredients = selectedMeals.flatMap(meal => meal.ingredients);
    const ingredientCount = {};
    
    allIngredients.forEach(ingredient => {
      ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
    });
    
    return Object.entries(ingredientCount).sort();
  };

  // Auto-generate meals when meal count changes
  useEffect(() => {
    if (mealCount > 0) {
      generateRandomMeals();
    }
  }, [mealCount]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meal Planner</h1>
      
      {/* Add New Meal Section */}
      <div className="bg-purple-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-800">Meal Database</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Total meals: {allMeals.length}
            </span>
            <button
              onClick={() => setShowMealList(!showMealList)}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              {showMealList ? 'Hide' : 'View'} All Meals
            </button>
            {!showAddMeal && (
              <button
                onClick={() => {
                  setEditingMealIndex(-1);
                  setShowAddMeal(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                <Plus size={16} />
                <span>Add New Meal</span>
              </button>
            )}
          </div>
        </div>

        {/* Meal List for Editing */}
        {showMealList && !showAddMeal && (
          <div className="bg-white p-4 rounded-lg border-2 border-purple-200 mb-4">
            <h3 className="font-medium text-gray-800 mb-4">All Meals</h3>
            <div className="max-h-64 overflow-y-auto space-y-2">
              {allMeals.map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{meal.name}</h4>
                    <p className="text-sm text-gray-600">
                      {meal.ingredients && meal.ingredients.length > 0 
                        ? `${meal.ingredients.length} ingredients`
                        : 'No ingredients'
                      }
                    </p>
                  </div>
                  <button
                    onClick={() => startEditMeal(index)}
                    className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Edit size={14} />
                    <span>Edit</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {showAddMeal && (
          <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
            <h3 className="font-medium text-gray-800 mb-4">
              {editingMealIndex >= 0 ? 'Edit Meal' : 'Add New Meal'}
            </h3>
            
            {/* Meal Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meal Name
              </label>
              <input
                type="text"
                value={newMealName}
                onChange={(e) => setNewMealName(e.target.value)}
                placeholder="Enter meal name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Ingredients Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ingredients
              </label>
              <div className="space-y-2">
                {newMealIngredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={ingredient}
                      onChange={(e) => updateIngredient(index, e.target.value)}
                      placeholder="Enter ingredient..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {newMealIngredients.length > 1 && (
                      <button
                        onClick={() => removeIngredientField(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addIngredientField}
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Plus size={14} />
                  <span>Add Ingredient</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={saveNewMeal}
                disabled={!newMealName.trim()}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Save size={16} />
                <span>{editingMealIndex >= 0 ? 'Update Meal' : 'Save Meal'}</span>
              </button>
              <button
                onClick={cancelAddMeal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Meal Count Selector */}
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-3">
          How many meals do you want to plan?
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="1"
            max="14"
            value={mealCount}
            onChange={(e) => setMealCount(parseInt(e.target.value) || 1)}
            className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={generateRandomMeals}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Shuffle size={16} />
            <span>Generate New Plan</span>
          </button>
        </div>
      </div>

      {/* Meal List */}
      {selectedMeals.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Meal Plan</h2>
          <div className="space-y-3">
            {selectedMeals.map((meal, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">{meal.name}</h3>
                  <p className="text-sm text-gray-600">
                    {meal.ingredients && meal.ingredients.length > 0 
                      ? (meal.ingredients.slice(0, 4).join(', ') + 
                         (meal.ingredients.length > 4 ? ` + ${meal.ingredients.length - 4} more` : ''))
                      : 'No ingredients listed'
                    }
                  </p>
                </div>
                <button
                  onClick={() => replaceMeal(index)}
                  className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  <RefreshCw size={14} />
                  <span>Replace</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generate Grocery List Button */}
      {selectedMeals.length > 0 && (
        <div className="mb-6">
          {selectedMeals.some(meal => meal.ingredients && meal.ingredients.length > 0) ? (
            <button
              onClick={() => setShowGroceryList(!showGroceryList)}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <ShoppingCart size={16} />
              <span>{showGroceryList ? 'Hide' : 'Show'} Grocery List</span>
            </button>
          ) : (
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Add ingredients to your meals to generate a grocery list!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Grocery List */}
      {showGroceryList && selectedMeals.length > 0 && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Grocery List</h2>
          {generateGroceryList().length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {generateGroceryList().map(([ingredient, count]) => (
                  <div key={ingredient} className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="text-gray-700 capitalize">{ingredient}</span>
                    {count > 1 && (
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                        x{count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Total items: {generateGroceryList().length}
              </div>
            </>
          ) : (
            <p className="text-gray-600">No ingredients found in selected meals. Add ingredients to meals to generate a grocery list!</p>
          )}
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-2">Your Meal Database is Ready!</h3>
        <p className="text-sm text-gray-600 mb-2">
          I've loaded all 113 of your historic meals. The meal planner is fully functional for selecting and planning meals.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Next step:</strong> To enable the grocery list feature, you can add ingredient arrays to each meal in the code. 
          For example: <code className="bg-gray-200 px-1 rounded">ingredients: ["chicken", "pasta", "alfredo sauce"]</code>
        </p>
      </div>
    </div>
  );
};

export default MealPlanner;
