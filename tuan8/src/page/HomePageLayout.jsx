import React from 'react';
import Header from '../componets/Header';
import EditorsPickLayout from '../componets/EditorsPickLayout';
import Footer from '../componets/Footer';
import RecipeVideoLayout from '../componets/RecipeVideoLayout';
import RecipeOfTheDaySection from '../componets/RecipeOfTheDaySection';

export default function HomePageLayout() {
    return (
        <div className="flex flex-col justify-between">
            {/* Hero section */}
            <div
                className="relative h-[600px] bg-cover bg-center"
                style={{ backgroundImage: 'url("kitchen_scene.jpg")' }}>
                <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744204172/af70879e-9f6e-4fa2-8457-7edc5a44c8c1.png"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6 w-80">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                        Recipe of the day
                    </div>
                    <h2 className="text-lg font-bold text-pink-600 mb-2">
                        Salad Caprese
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh
                        mozzarella, herbs, olive oil, and balsamic vinegar
                        create a refreshing dish.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 mb-4">
                        <img
                            src="https://res.cloudinary.com/dqlzcgear/image/upload/v1741354533/avatar_mcfo0h.png"
                            alt="author"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-800">
                            Salad Caprese
                        </span>
                    </div>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 px-5 ">
                        View now →
                    </button>
                </div>
            </div>
            <div>
                <RecipeOfTheDaySection />
                <RecipeVideoLayout />
                <EditorsPickLayout />
            </div>
        </div>
    );
}
