import React from 'react';
import RecipeCard from './RecipeCard ';

const recipes = [
    {
        title: 'Italian-style tomato salad',
        time: '14 minutes',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744726763/Italian-style_tomato_lfmxer.png',
    },
    {
        title: 'Spaghetti with vegetables and shrimp',
        time: '15 minutes',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1741178828/Vegetable_and_shrimp_spaghetti_lp2ikz.png',
    },
    {
        title: 'Lotus delight salad',
        time: '20 minutes',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1741178823/salad_with_cabbage_and_shrimp_xgldbm.png',
    },
    {
        title: 'Snack cakes',
        time: '21 minutes',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744726843/Snack_cakes_faudnk.png',
    },
];

export default function RecipeVideoLayout() {
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
