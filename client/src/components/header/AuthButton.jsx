import React from "react";
import { Link } from "react-router-dom";

const AuthButton = () => {
  return (
    <div className="flex gap-4 items-center justify-center w-full">
      <Link
        to="/login"
        className="font-medium text-gray-700 dark:text-gray-300 hover:underline">
        Login
      </Link>
      <Link
        to="/signup"
        className="text-white max-sm:hidden bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Started
      </Link>
    </div>
  );
};

export default AuthButton;
