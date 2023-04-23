import React from "react";
import Header from "./Header";
import About from "./About";
import ArticlesList from "./ArticleList";
import articles from "../data/blog";

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About image="https://via.placeholder.com/215" alt="blog" text="This is my blog about React and other technologies related to it." />
      <ArticlesList articles={[
        { id: 1, title: "React Basics", date: "April 20, 2023", preview: "Learn the basics of React and how to get started with it."},
        { id: 2, title: "Advanced React Concepts", date: "April 22, 2023", preview: "Explore advanced concepts in React such as Redux and React Hooks." },
        { id: 3, title: "React Best Practices", date: "April 24, 2023", preview: "Discover the best practices for developing applications using React." }
      ]} />
  </div>
  );
}

export default App;
