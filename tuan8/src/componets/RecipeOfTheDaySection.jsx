import React from 'react';
import { Bookmark } from 'lucide-react';
import RecipeCard from './RecipeCard ';

export default function RecipeOfTheDaySection() {
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
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </section>
    );
}
