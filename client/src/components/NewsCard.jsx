import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">
          {article.description?.substring(0, 100)}...
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
