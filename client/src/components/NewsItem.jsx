import React from "react";
import NewsCard from "./NewsCard";

const NewsItem = ({ articles }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          📰 Tech News Today
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
