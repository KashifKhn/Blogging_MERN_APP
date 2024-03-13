import React, { useState } from "react";

const CommentCard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300 relative">
      <div className="flex justify-end  dark:bg-gray-900 dark:border-gray-700 absolute right-6 top-6">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 absolute m-0 top-8 ${
            !dropdownOpen && "hidden"
          } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2"
            aria-labelledby="dropdownButton"
          >
            <li>
              <button className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Edit
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 w-full text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <svg
                  className="w-6 h-6 inline-block mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="Delete"
                >
                  <path
                    d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
                    fill="#b91c1c"
                    className="color000000 svgShape"
                  ></path>
                </svg>
                delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start  dark:bg-gray-900 dark:border-gray-700">
        <div className="flex pt-4 pl-4 gap-4">
          <img
            className="w-8 h-8 mb-3 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-600 dark:text-white">
            Bonnie Green
          </h5>
        </div>
        <div className="flex pb-4 pl-4">
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. consectetur
            adipisicing elit. Enim autem porro odit pariatur, ratione saepe eum
            qui. Saepe, sit assumenda? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quae, unde suscipit quas nobis amet facilis
            quaerat odio magnam? Totam, suscipit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Laboriosam quod fugit unde qui quam
            enim molestiae vitae debitis repudiandae perspiciatis nisi, dolores
            velit voluptatibus amet consectetur maiores minus, necessitatibus
            quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
