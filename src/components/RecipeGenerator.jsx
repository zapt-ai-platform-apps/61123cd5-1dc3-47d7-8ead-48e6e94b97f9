import React, { useEffect, useState } from 'react';
import * as Sentry from '@sentry/browser';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';

export default function RecipeGenerator({ ingredients }) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const dummyRecipes = [
    {
      id: 1,
      title: 'Chicken Tomato Rice Bowl',
      steps: [
        'Prepare ingredients by chopping chicken and tomatoes.',
        'Cook rice until tender.',
        'Saute chicken and tomatoes, then combine with rice.',
        'Season as desired and serve warm.'
      ],
      substitutions: ['Tofu can be used instead of chicken for a vegetarian option.']
    },
    {
      id: 2,
      title: 'Stuffed Tomatoes',
      steps: [
        'Slice the tops off the tomatoes and scoop out the pulp.',
        'Mix the pulp with herbs and breadcrumbs.',
        'Fill tomatoes with the mixture and bake until tender.'
      ],
      substitutions: ['Bell peppers can be stuffed similarly if tomatoes are unavailable.']
    }
  ];

  useEffect(() => {
    if (ingredients.length === 0) {
      setRecipes([]);
      return;
    }
    setLoading(true);
    console.log('Generating recipes for ingredients:', ingredients);
    const timer = setTimeout(() => {
      setRecipes(dummyRecipes);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [ingredients]);

  const handleRecipeClick = (recipe) => {
    console.log('Recipe selected:', recipe.title);
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {loading ? (
        <div className="text-center">Loading recipes...</div>
      ) : recipes.length === 0 ? (
        <div className="text-center">No recipes available. Please add ingredients.</div>
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      )}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} closeModal={closeModal} />
      )}
    </div>
  );
}