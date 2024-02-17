import React from "react";
import useFetchBlog from "../Hooks/useFetchBlog";

const Home = () => {
  const { blogs, isLoading, error } = useFetchBlog();
  console.log(blogs)
  

  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
