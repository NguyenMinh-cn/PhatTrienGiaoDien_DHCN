// components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header({ onLoginClick }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            <Link to="/">
                <img
                    src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744724810/chefify_qtmphv.png"
                    alt="Cheffify"
                    className="pr-4"
                />
            </Link>

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
                <NavLink
                    to="/what-to-cook"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-500 hover:text-pink-600'
                    }>
                    What to cook
                </NavLink>
                <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-500 hover:text-pink-600'
                    }>
                    Recipes
                </NavLink>
                <NavLink
                    to="/ingredients"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-500 hover:text-pink-600'
                    }>
                    Ingredients
                </NavLink>
                <NavLink
                    to="/occasions"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-500 hover:text-pink-600'
                    }>
                    Occasions
                </NavLink>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-500 hover:text-pink-600'
                    }>
                    About Us
                </NavLink>
                <button
                    onClick={onLoginClick}
                    className="bg-pink-200 text-pink-600 font-normal">
                    Login
                </button>
                <button className="bg-pink-500 text-white font-normal">
                    Subscribe
                </button>
            </nav>
        </header>
    );
}
