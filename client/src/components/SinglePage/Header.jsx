import React from "react";
import OptionsButton from "./OptionsButton";
import { getTimeAgo } from "../../utils/momentFunctions";

const Header = ({ blog }) => {
  return (
    <header className="mb-4 lg:mb-6 not-format">
      <div className="flex justify-between">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={`${blog?.author?.fullname} avatar`}
            />
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white">
                {blog?.author?.fullname}
              </a>
              <p className="text-base text-gray-500 dark:text-gray-400">
                <time
                  pubdate=""
                  dateTime={blog?.createdAt}
                  title={blog?.createdAt}>
                  {getTimeAgo(blog?.createdAt)}
                </time>
              </p>
            </div>
          </div>
        </address>
        <OptionsButton
          blogId={blog._id}
          userId={blog?.author?._id}
        />
      </div>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        {blog?.title}
      </h1>
    </header>
  );
};

export default Header;
