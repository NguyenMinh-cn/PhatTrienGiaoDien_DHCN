import React from 'react';
import RecipeVideoLayout from './componets/RecipeVideoLayout';
import EditorsPickLayout from './componets/EditorsPickLayout';
import RecipeOfTheDaySection from './componets/RecipeOfTheDaySection';
export default function HomePageLayout() {
    return (
        <div className="flex flex-col justify-between">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                <img
                    src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744724810/chefify_qtmphv.png"
                    alt="Cheffify"
                    className="pr-4"
                />
                <div className="relative ml-6 pr-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="What would you like to cook?"
                        className="pl-9 w-[300px] rounded-full bg-gray-100 text-sm py-2"
                    />
                </div>

                <nav className="flex items-center gap-4 text-[12px]">
                    <a href="#" className=" text-gray-500 hover:text-pink-600">
                        What to cook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600">
                        Recipes
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600">
                        Ingredients
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600">
                        Occasions
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600">
                        About Us
                    </a>
                    <button className="bg-pink-200 text-pink-600 font-normal ">
                        Login
                    </button>
                    <button className="bg-pink-500 text-white font-normal">
                        Subscribe
                    </button>
                </nav>
            </header>

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
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10 px-6 rounded-t-2xl text-left">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                    {/* About Us (takes 2 columns) */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-lg mb-2">About Us</h4>
                        <p className="text-sm mb-4">
                            Welcome to our website, a wonderful place to explore
                            and learn how to cook like a pro.
                        </p>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-md text-gray-800 bg-white w-full"
                            />
                            <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white font-semibold">
                                Send
                            </button>
                        </div>
                        <div className=" mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center space-x-3">
                            <div className="flex items-center gap-2 mb-2 md:mb-0">
                                <img
                                    src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744729227/chefifywhite_cccvar.png"
                                    alt="Cheffify"
                                    className="pr-4"
                                />
                                <span className=" text-white">
                                    2023 Cheffy Company
                                </span>
                            </div>
                            <div className="space-x-2">
                                <a
                                    href="#"
                                    className=" text-white hover:text-pink-500">
                                    Terms of Service
                                </a>
                                <span>|</span>
                                <a
                                    href="#"
                                    className=" text-white hover:text-pink-500">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Learn More + Shop in one column */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Learn More</h4>
                        <ul className="space-y-2 text-sm mb-6">
                            <li>Our Cooks</li>
                            <li>See Our Features</li>
                            <li>FAQ</li>
                        </ul>
                        <h4 className="font-bold text-lg mb-2">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Gift Subscription</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>

                    {/* Recipes */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Recipes</h4>
                        <ul className="space-y-2 text-sm">
                            <li>What to Cook This Week</li>
                            <li>Pasta</li>
                            <li>Dinner</li>
                            <li>Healthy</li>
                            <li>Vegetarian</li>
                            <li>Vegan</li>
                            <li>Christmas</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
