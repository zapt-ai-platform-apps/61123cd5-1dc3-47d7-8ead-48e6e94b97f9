import React, { useState } from 'react';

export function IngredientInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = inputValue.split(',').map(ing => ing.trim()).filter(ing => ing);
    onSubmit(ingredientsArray);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter ingredients, separated by commas"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2">Submit Ingredients</button>
    </form>
  );
}

export function RecipeGenerator({ ingredients }) {
  return (
    <div>
      {ingredients.length > 0 ? (
        <div>
          <p>Generating recipes based on: {ingredients.join(', ')}</p>
          <ul className="list-disc ml-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient} Recipe</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please add some ingredients to generate recipes.</p>
      )}
    </div>
  );
}

export function ZeroWasteTips() {
  return (
    <div>
      <ul className="list-decimal ml-5">
        <li>Plan your meals ahead.</li>
        <li>Buy in bulk to reduce packaging waste.</li>
        <li>Use reusable containers for food storage.</li>
      </ul>
    </div>
  );
}

export function SustainabilityTracker() {
  return (
    <div>
      <p>Sustainability progress will be tracked here.</p>
      <div className="w-full bg-gray-300 h-4">
        <div className="bg-green-500 h-4" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
}

export function MealPlanner() {
  return (
    <div>
      <p>Your meal plan for the week will appear here.</p>
    </div>
  );
}

export function CommunityFeatures() {
  return (
    <div>
      <p>Community posts and features will be displayed here.</p>
      <ul className="list-disc ml-5">
        <li>User 1: Shared a zero waste recipe.</li>
        <li>User 2: Asked a question about sustainability.</li>
      </ul>
    </div>
  );
}