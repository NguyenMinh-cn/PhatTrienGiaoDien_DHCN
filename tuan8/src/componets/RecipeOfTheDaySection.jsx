import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeOfTheDaySection() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu từ JSON server
        fetch('http://localhost:5000/recipes')
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="py-12 px-4 md:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-pink-600 mb-2">
                    This Summer Recipes
                </h2>
                <p className="text-gray-600">
                    We have all your Independence Day sweets covered.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </section>
    );
}
