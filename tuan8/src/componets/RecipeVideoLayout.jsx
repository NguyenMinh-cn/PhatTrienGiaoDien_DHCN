import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeVideoLayout() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipesWithVideos')
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error('Failed to fetch recipes:', err));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Recipes With Videos
            </h1>
            <p className="text-lg text-gray-700 mb-12">
                Cooking Up Culinary Creations with Step-by-Step Videos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
