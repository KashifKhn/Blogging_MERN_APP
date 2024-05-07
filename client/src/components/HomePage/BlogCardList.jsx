import React, { useState, useRef, useCallback, useEffect } from "react";
import BlogCard from "./BlogCard";
import useFetchBlogs from "../../Hooks/useFetch/blogFetch/useFetchBlogs";
import LoadingSkeleton from "./LoadingSkeleton";

const BlogCardList = () => {
  const { blogs, isLoading, error, hasMore, fetchBlogs } = useFetchBlogs();
  const [page, setPage] = useState(1);

  const observer = useRef();
  const lastBlogElementRef = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    fetchBlogs(page, 5);
  }, [page]);

  if (!blogs) {
    return (
      <>
        <LoadingSkeleton />
        <LoadingSkeleton />
      </>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="py-4 px-1 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="grid gap-4">
          {blogs.map((blog, index) => {
            if (blogs.length === index + 1) {
              return (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                  ref={lastBlogElementRef}
                />
              );
            } else {
              return (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                />
              );
            }
          })}
        </div>
      </div>
      {isLoading && <LoadingSkeleton />}
    </section>
  );
};

export default BlogCardList;
