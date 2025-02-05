import React from 'react';

export default function ZeroWasteTips() {
  const tips = [
    "Store herbs in a glass of water like a bouquet.",
    "Use vegetable scraps to make homemade broth.",
    "Freeze extra produce for future use.",
    "Plan meals ahead to reduce waste."
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tips.map((tip, index) => (
        <div key={index} className="p-4 border rounded hover:shadow-md cursor-pointer">
          {tip}
        </div>
      ))}
    </div>
  );
}