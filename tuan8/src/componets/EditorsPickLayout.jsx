import React, { useEffect, useState } from 'react';
import { Bookmark } from 'lucide-react';

export default function EditorsPickLayout() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the json-server
        fetch('http://localhost:5000/editorsPick')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-pink-600 text-4xl font-bold text-center mb-2">
                Editor's pick
            </h1>
            <p className="text-center text-gray-600 mb-10">
                Curated Culinary Delights: Handpicked Favorites by Our Expert
                Editors!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl shadow-md transform transition duration-300 hover:scale-105">
                        <div className="bg-white overflow-hidden rounded-2xl">
                            <div className="flex">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-1/3 object-cover h-full"
                                />
                                <div className="p-4 w-2/3 relative">
                                    <div className="text-left text-lg font-bold mb-1">
                                        {item.title}
                                    </div>
                                    <div className="text-left text-sm text-gray-500 mb-2">
                                        {item.time}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-2">
                                        <img
                                            src={item.imgathor}
                                            className="w-6 h-6"
                                        />
                                        {item.author}
                                    </div>
                                    <p className="text-justify text-sm text-gray-800">
                                        {item.description}
                                    </p>
                                    <Bookmark
                                        className="absolute top-4 right-4 text-pink-500"
                                        size={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
