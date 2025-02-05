import React, { useState } from 'react';
import { IngredientInput, RecipeGenerator, ZeroWasteTips, SustainabilityTracker, MealPlanner, CommunityFeatures } from './components';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  
  const handleIngredientsSubmit = (newIngredients) => {
    console.log('Ingredients submitted:', newIngredients);
    setIngredients(newIngredients);
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <header className="bg-green-100 p-4 shadow-md">
        <h1 className="text-3xl font-bold">Zero Waste Cooker</h1>
        <nav className="mt-2">
          <a href="#ingredients" className="mr-4 cursor-pointer">Ingredients</a>
          <a href="#recipes" className="mr-4 cursor-pointer">Recipes</a>
          <a href="#tips" className="mr-4 cursor-pointer">Zero-Waste Tips</a>
          <a href="#meal-planner" className="mr-4 cursor-pointer">Meal Planner</a>
          <a href="#community" className="mr-4 cursor-pointer">Community</a>
          <a href="#sustainability" className="cursor-pointer">Sustainability</a>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <section id="ingredients" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enter Your Ingredients</h2>
          <IngredientInput onSubmit={handleIngredientsSubmit} />
        </section>
        <section id="recipes" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recipe Generator</h2>
          <RecipeGenerator ingredients={ingredients} />
        </section>
        <section id="tips" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Zero-Waste Tips</h2>
          <ZeroWasteTips />
        </section>
        <section id="meal-planner" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meal Planner</h2>
          <MealPlanner />
        </section>
        <section id="community" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Feed</h2>
          <CommunityFeatures />
        </section>
        <section id="sustainability" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sustainability Tracker</h2>
          <SustainabilityTracker />
        </section>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <span>Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">ZAPT</a></span>
      </footer>
    </div>
  );
}