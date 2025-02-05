import React from 'react';

export default function SustainabilityTracker() {
  const savedFoodWaste = 10; // in kg

  return (
    <div className="p-4 border rounded text-center">
      <h3 className="text-xl font-semibold mb-2">Sustainability Tracker</h3>
      <p>You’ve saved <span className="font-bold">{savedFoodWaste}kg</span> of food waste this month!</p>
    </div>
  );
}