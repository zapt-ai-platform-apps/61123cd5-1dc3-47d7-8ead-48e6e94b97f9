import React from 'react';

export default function RecipeList({ recipes, onRecipeClick }) {
  return (
    <ul className="space-y-4">
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          className="p-4 border rounded cursor-pointer hover:shadow-md"
          onClick={() => onRecipeClick(recipe)}
        >
          <h3 className="text-xl font-semibold">{recipe.title}</h3>
        </li>
      ))}
    </ul>
  );
}