import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { convertHtml, convertMarkdown } from "../../utils/blogConverter";

const BlogCard = ({ blog }) => {
  const timeAgo = moment(blog.createdAt).fromNow();
  const countWord = (str) => {
    str = str.trim();
    const words = str.split(/\s+/);
    return words.length;
  };
  const findReadTime = (str) => {
    const wordCount = countWord(str);
    const readTime = Math.ceil(wordCount / 200);
    return readTime;
  };
  return (
    <Link to={`/${blog._id}`}>
      <Card className="w-full">
        <Card.Header className="border-0 bg-transparent">
          <figcaption className="flex items-center">
            <div>
              <img
                className="rounded-full w-8 h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
            </div>
            <div className="flex gap-4">
              <p className="ms-2 text-sm text-black dark:text-gray-400 ">
                Author Name
              </p>
              <p className="text-gray-500">{timeAgo} </p>
            </div>
          </figcaption>
        </Card.Header>
        <Card.Body className="md:flex md:flex-row-reverse w-full flex-col">
          <div className="ml-auto">
            <Card.Img
              className="md:w-56 w-80 max-h-44 rounded-xl"
              src={blog.imgUrl}
            />
          </div>
          <div className="md:w-3/4">
            <h3 className="text-[2rem] font-bold mb-3">{blog.title}</h3>
            <div className="text-gray-950 dark:text-gray-300 line-clamp-3 my-2">
              {blog.postFormat === "editor"
                ? convertHtml(blog.post)
                : convertMarkdown(blog.post)}
            </div>
            <div className="flex gap-4 max-sm:flex-col">
              <p>
                <span className="bg-gray-200 text-black text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Programming Coding
                </span>
              </p>
              <div>{findReadTime(blog.post)} min read</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BlogCard;
