import React from "react";
import { Link } from "react-router-dom";
import { convertHtml, convertMarkdown } from "../../utils/blogConverter";
import findReadTime from "../../utils/findReadTime";
import { getTimeAgo } from "../../utils/momentFunctions";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/${blog._id}`}>
      <article className="p-4 rounded-lg flex border-b-4 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:shadow-none">
        <div className="max-w-[75%] pr-4">
          <div className="flex gap-4 items-center mb-4 text-gray-500">
            <div className="flex items-center space-x-4">
              <img
                className="w-7 h-7 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <span className="font-medium dark:text-white">Jese Leos</span>
            </div>
            <span className="text-sm">{getTimeAgo(blog.createdAt)}</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h2>
          <div className="mb-4 font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
            {blog.postFormat === "html"
              ? blog.post.length > 300
                ? convertHtml(blog.post.substring(0, 300) + "...")
                : convertHtml(blog.post)
              : blog.post.length > 300
              ? convertMarkdown(blog.post.substring(0, 300) + "...")
              : convertMarkdown(blog.post)}
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              programming languages
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {findReadTime(blog.post) + " min read"}
            </span>
          </div>
        </div>
        <div className="max-w-[25%] w-full h-full ml-auto hidden sm:block">
          <img
            className="rounded-lg object-cover min-h-[200px] w-full h-full"
            src={blog.imgUrl}
            alt="blog"
          />
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
