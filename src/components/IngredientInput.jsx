import React, { useState } from 'react';
import { manualSubmitHandler, barcodeScanHandler, voiceInputHandler } from '../utils/ingredientHandlers';

export default function IngredientInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleManualSubmit = () => {
    manualSubmitHandler(input, onSubmit, setInput, setIsSubmitting);
  };

  const handleBarcodeScan = () => {
    barcodeScanHandler(onSubmit);
  };

  const handleVoiceInput = () => {
    voiceInputHandler(onSubmit);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter ingredients, separated by commas"
        className="w-full p-2 border border-gray-300 box-border"
      />
      <div className="flex space-x-4">
        <button onClick={handleManualSubmit} disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 cursor-pointer">
          Add Ingredients
        </button>
        <button onClick={handleBarcodeScan} className="bg-green-500 text-white px-4 py-2 cursor-pointer">
          Scan Barcode
        </button>
        <button onClick={handleVoiceInput} className="bg-purple-500 text-white px-4 py-2 cursor-pointer">
          Voice Input
        </button>
      </div>
    </div>
  );
}