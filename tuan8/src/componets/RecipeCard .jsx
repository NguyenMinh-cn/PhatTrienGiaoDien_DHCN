import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-30 object-fill"
            />

            <div className="p-4 flex flex-col justify-between h-32">
                <div className="flex justify-between">
                    <span className="text-left text-sm font-semibold text-gray-800">
                        {recipe.title}
                    </span>
                    <img
                        src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744727244/Icon_Button_73_iraf7x.png"
                        alt="Bookmark"
                        className="w-8 h-8"
                    />
                </div>

                {/* Time label */}
                <div className="mt-auto ">
                    <p className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded">
                        {recipe.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
