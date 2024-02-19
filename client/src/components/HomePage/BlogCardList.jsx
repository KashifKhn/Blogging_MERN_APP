import React from "react";
import BlogCard from "./BlogCard";
import useFetchBlogs from "../../Hooks/useFetchBlogs";

const BlogCardList = () => {
  const { blogs, isLoading, error } = useFetchBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogCardList;
