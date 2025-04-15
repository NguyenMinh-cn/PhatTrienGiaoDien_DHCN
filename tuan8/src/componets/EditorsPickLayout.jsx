import React from 'react';
import { Bookmark } from 'lucide-react';

const data = [
    {
        title: 'Stuffed sticky rice ball',
        time: '34 minutes',
        author: 'Jennifer King',
        imgathor:
            'https://res.cloudinary.com/dqlzcgear/image/upload/v1741354533/avatar_mcfo0h.png',
        description:
            'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744728533/33865701-4155-404a-9c0c-633a065c8ca7.png',
    },
    {
        title: 'Strawberry smoothie',
        time: '40 minutes',
        author: 'Matthew Martinez',
        imgathor:
            'https://res.cloudinary.com/dqlzcgear/image/upload/v1744178028/Avatar_1_fvu3ry.png',
        description:
            'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744728567/932d2e01-167f-494a-9184-2902b8eeb3a1.png',
    },
    {
        title: 'Latte Art',
        time: '19 minutes',
        author: 'Sarah Hill',
        imgathor:
            'https://res.cloudinary.com/dqlzcgear/image/upload/v1744178028/Avatar_313_lkt8jh.png',
        description:
            'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744728575/300ac734-c5c0-4298-b897-aded94645970.png',
    },
    {
        title: 'Butter fried noodles',
        time: '16 minutes',
        author: 'Julia Lopez',
        imgathor:
            'https://res.cloudinary.com/dqlzcgear/image/upload/v1744178028/Avatar_2_zcqvfc.png',
        description:
            'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
        image: 'https://res.cloudinary.com/dqlzcgear/image/upload/v1744728584/e45f6cfe-760f-4d9b-bbfb-7795fc1746bf.png',
    },
];

export default function EditorsPickLayout() {
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
