import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 py-16 px-4 bg-gray-50">
      {/* Left Side - Description and Search */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Stay Informed, Stay Ahead
        </h1>
        <p className="text-gray-600 text-lg">
          Get the latest news from around the world. Our comprehensive coverage 
          keeps you updated on breaking stories, in-depth analysis, and trending topics.
        </p>
        
        {/* Search Input */}
        <div className="flex">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search for news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex items-center justify-center">
        <img 
          src="/images/header.jpg" 
          alt="News Illustration" 
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;