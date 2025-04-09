import React from "react";

const recipes = [
  {
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: "image1.jpg"
  },
  {
    title: "Salad of cove beans, shrimp and potatoes",
    time: "20 minutes",
    image: "image2.jpg"
  },
  {
    title: "Sunny-side up fried egg",
    time: "15 minutes",
    image: "image3.jpg"
  },
  {
    title: "Lotus delight salad",
    time: "20 minutes",
    image: "image4.jpg"
  }
];

export default function RecipeVideoLayout() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Recipes With Videos</h1>
      <p className="text-lg text-gray-700 mb-12">Cooking Up Culinary Creations with Step-by-Step Videos</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-56 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-pink-500 text-sm">{recipe.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
