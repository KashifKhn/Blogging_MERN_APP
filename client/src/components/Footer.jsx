import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center shadow dark:bg-gray-800">
      <div className="w-full mx-auto text-center max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/KashifKhn"
              target="_blank"
              className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
              target="_blank"
              className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KashifKhn"
              target="_blank"
              className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {"© "} {new Date().getFullYear()} {" "}
          <Link
            to="/"
            className="hover:underline">
             Blogging™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
