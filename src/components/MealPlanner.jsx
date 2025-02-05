import React from 'react';

export default function MealPlanner() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className="p-4 border rounded">
      <h3 className="text-xl font-semibold mb-4">Weekly Meal Planner</h3>
      <ul className="space-y-2">
        {daysOfWeek.map((day, index) => (
          <li key={index} className="p-2 border rounded hover:bg-gray-100 cursor-pointer">
            {day}: Plan your meals here.
          </li>
        ))}
      </ul>
    </div>
  );
}