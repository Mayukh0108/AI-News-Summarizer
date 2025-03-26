import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import NewsItem from "./components/NewsItem";
function App() {
  const [articles, setArticles] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/news");
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
 
  return (
    <div>
      <Navbar />
      <HeroSection />
      {articles.length > 0 ? (
        <NewsItem articles={articles} />
      ) : (
        <p className="text-center text-gray-600">Loading news...</p>
      )}
    </div>
  );
}

export default App;

{
  /* <TextCursor
      text="🔴"
      delay={0.01}
      spacing={80}
      followMouseDirection={true}
      randomFloat={true}
      exitDuration={0.5}
      removalInterval={20}
      maxPoints={10}
    /> */
}
