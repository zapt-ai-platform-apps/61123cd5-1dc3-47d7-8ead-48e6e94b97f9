import React from 'react';

export default function RecipeModal({ recipe, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 cursor-pointer">
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <h3 className="font-semibold mb-2">Step-by-Step Instructions:</h3>
        <ol className="list-decimal list-inside mb-4">
          {recipe.steps.map((step, index) => (
            <li key={index} className="mb-1">{step}</li>
          ))}
        </ol>
        <h3 className="font-semibold mb-2">Ingredient Substitutions:</h3>
        <ul className="list-disc list-inside">
          {recipe.substitutions.map((sub, index) => (
            <li key={index}>{sub}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}