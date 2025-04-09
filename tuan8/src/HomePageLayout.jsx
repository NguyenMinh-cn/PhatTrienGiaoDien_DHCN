import React from "react";
import RecipeVideoLayout from './componets/RecipeVideoLayout'
import EditorsPickLayout from './componets/EditorsPickLayout'
export default function HomePageLayout() {
  return (
    <div className="flex flex-col justify-between">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="text-pink-600 font-bold text-xl">Cheffify</div>
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="border rounded-full px-4 py-1 w-1/3 text-sm focus:outline-none"
        />
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-pink-600">What to cook</a>
          <a href="#" className="hover:text-pink-600">Recipes</a>
          <a href="#" className="hover:text-pink-600">Ingredients</a>
          <a href="#" className="hover:text-pink-600">Occasions</a>
          <a href="#" className="hover:text-pink-600">About Us</a>
          <button className="text-pink-600 font-medium">Login</button>
          <button className="bg-pink-500 text-white px-4 py-1 rounded-full">Subscribe</button>
        </nav>
      </header>

      {/* Hero section */}
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("kitchen_scene.jpg")' }}>
        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744204172/af70879e-9f6e-4fa2-8457-7edc5a44c8c1.png" alt="" />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6 w-80">
          <div className="text-center mb-2">
            <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">Recipe of the day</span>
          </div>
          <h2 className="text-lg font-bold text-pink-600 mb-2">Salad Caprese</h2>
          <p className="text-sm text-gray-600 mb-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img src="https://res.cloudinary.com/dqlzcgear/image/upload/v1741354533/avatar_mcfo0h.png" alt="Chef" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-medium text-gray-700">Salad Caprese</span>
          </div>
          <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full w-full">View now</button>
        </div>
      </div>
        <div>
        <EditorsPickLayout/>
        <RecipeVideoLayout/>
        </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-10 mt-10 rounded-t-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p className="text-sm mb-4">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md text-gray-900 focus:outline-none text-sm w-full"
              />
              <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white text-sm">Send</button>
            </div>
            </div>

          <div>
            <h3 className="font-bold mb-2">Learn More</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Our Cooks</a></li>
              <li><a href="#" className="hover:underline">See Our Features</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Shop</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Gift Subscription</a></li>
              <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Recipes</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
              <li><a href="#" className="hover:underline">Pasta</a></li>
              <li><a href="#" className="hover:underline">Dinner</a></li>
              <li><a href="#" className="hover:underline">Healthy</a></li>
              <li><a href="#" className="hover:underline">Vegetarian</a></li>
              <li><a href="#" className="hover:underline">Vegan</a></li>
              <li><a href="#" className="hover:underline">Christmas</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t pt-6 border-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Cheffify</span>
            <span className="text-gray-400">2023 Cheffify Company</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}