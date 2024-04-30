import React, { useState } from "react";
import useFetchDeleteBlog from "../../Hooks/useFetch/blogFetch/useFetchDeleteBlog";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/auth/useAuth";
const OptionsButton = ({ blogId, userId }) => {
  const { handleDelete } = useFetchDeleteBlog();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { authState } = useAuth();

  return (
    <div>
      <button
        className="inline-flexitems-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}>
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3">
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
        <span className="sr-only">Comment settings</span>
      </button>
      <div
        id="dropdownComment1"
        className={`z-50 w-36 ${
          !dropdownOpen && "hidden"
        } absolute right-20 top-36 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
        data-popper-placement="bottom">
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200 z-50"
          aria-labelledby="dropdownMenuIconHorizontalButton">
          {userId === authState.id && (
            <li>
              <Link to={`/edit/${blogId}`}>
                <button className="w-full flex justify-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Write">
                    <path
                      d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                      fill="currentColor"></path>
                    <path
                      d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                      stroke="currentColor"></path>
                  </svg>
                </button>
              </Link>
            </li>
          )}
          <li>
            <button className="flex justify-center items-center w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                  fill="currentColor"></path>
              </svg>
            </button>
          </li>
          {userId === authState.id && (
            <li>
              <button
                className="flex justify-center items-center w-full py-2 px-4 text-red-600 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-red-900"
                onClick={() => handleDelete(blogId)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  id="Delete">
                  <path
                    d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
                    fill="#ff0000"
                    className="color000000 svgShape"></path>
                </svg>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default OptionsButton;
