import React from "react";
import BlogCardList from "../components/HomePage/BlogCardList";
import FilterBar from "../components/header/Filter/FilterBar";

const Home = () => {
  return (
    <div>
      <FilterBar />
      <BlogCardList />
    </div>
  );
};

export default Home;
