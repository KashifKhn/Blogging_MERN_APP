import React from "react";
import useLogout from "../../Hooks/auth/useLogout";
import useAuth from "../../Hooks/auth/useAuth";
import { NavLink } from "react-router-dom";

const UserSetting = () => {
  const { logout } = useLogout();
  const { authState } = useAuth();
  return (
    <div
      className="absolute top-8 right-5 bg-slate-100 z-50 my-4 w-56 text-base list-none rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown">
      <div className="py-3 px-4">
        <NavLink
          to="/new"
          className="flex p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
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
          <span className="ml-4">write</span>
        </NavLink>
      </div>
      <div className="py-3 px-4">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          {authState.fullname}
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          {authState.email}
        </span>
      </div>
      <ul
        className="py-1 text-gray-500 dark:text-gray-400"
        aria-labelledby="dropdown">
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            My profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            Account settings
          </a>
        </li>
      </ul>
      <ul
        className="py-1 text-gray-500 dark:text-gray-400"
        aria-labelledby="dropdown">
        <li>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg
              className="mr-2 w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18">
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>
            My likes
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg
              className="mr-2 w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              {" "}
              <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
              <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
              <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
            </svg>
            Collections
          </a>
        </li>
      </ul>
      <ul
        className="py-1 text-gray-500 dark:text-gray-400"
        aria-labelledby="dropdown">
        <li>
          <button
            onClick={logout}
            className="w-full text-left py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserSetting;
