import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="container">
      <div className="text-center mt-40">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">
          {error.status}
        </h1>
        <p className="text-gray-600 mb-4">{error.statusText}</p>
        {/* <p>{error.}</p> */}
        <p className="mb-4 text-lg text-gray-600">
          Oops! Looks like you're lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <div className="mt-4 text-gray-600 flex flex-col">
          <p>Let's get you back </p>
          <Link
            to="/"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            {" "}
            Go back to Home{" "}
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Error;
