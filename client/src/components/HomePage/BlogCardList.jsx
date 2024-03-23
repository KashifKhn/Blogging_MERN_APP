import React from "react";
import BlogCard from "./BlogCard";
import useFetchBlogs from "../../Hooks/useFetch/blogFetch/useFetchBlogs";

const BlogCardList = () => {
  const { blogs, isLoading, error } = useFetchBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section className="dark:bg-gray-900">
      <div className="py-4 px-1 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="grid gap-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardList;
