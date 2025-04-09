import React from "react";

const picks = [
  {
    title: "Stuffed sticky rice ball",
    time: "34 minutes",
    author: "Jennifer King",
    description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    image: "sticky_rice.jpg",
    avatar: "jennifer.jpg"
  },
  {
    title: "Strawberry smoothie",
    time: "40 minutes",
    author: "Matthew Martinez",
    description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    image: "smoothie.jpg",
    avatar: "matthew.jpg"
  },
  {
    title: "Latte Art",
    time: "18 minutes",
    author: "Sarah Hill",
    description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    image: "latte.jpg",
    avatar: "sarah.jpg"
  },
  {
    title: "Butter fried noodles",
    time: "16 minutes",
    author: "Julia Lopez",
    description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    image: "noodles.jpg",
    avatar: "julia.jpg"
  }
];

export default function EditorsPickLayout() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">Editor's pick</h1>
      <p className="text-center text-gray-600 mb-10">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {picks.map((pick, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={pick.image} alt={pick.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{pick.title}</h2>
              <div className="flex items-center gap-3 mb-3">
                <img src={pick.avatar} alt={pick.author} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-gray-700">{pick.author}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{pick.description}</p>
              <span className="text-pink-500 text-xs">{pick.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
