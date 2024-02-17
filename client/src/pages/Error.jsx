import React from "react";
import Container from "react-bootstrap/Container";

const Error = () => {
  return (
    <Container>
      <div className="text-center mt-40">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p class="text-gray-600 mb-4">
          Oops! The page you are looking for could not be found.
        </p>
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
        <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <a
            href="/"
            class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            {" "}
            Go back to Home{" "}
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default Error;
