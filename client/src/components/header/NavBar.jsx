import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/svgs/Logo";
import SearchBar from "./SearchBar";
import ChangeTheme from "./ChangeTheme";
import UserSettingIcon from "./UserSettingIcon";
import AuthButton from "./AuthButton";
import useAuth from "../../Hooks/auth/useAuth";

const NavBar = () => {
  const { authState } = useAuth();
  return (
    <nav className="flex px-4 py-2.5  justify-between">
      <div className="flex justify-start items-center">
        <NavLink
          to="/"
          className="flex mr-8">
          <Logo />
          <span className="self-center text-2xl font-semibold whitespace-nowrap sr-only dark:text-white">
            EnvisionEssence
          </span>
        </NavLink>
        <SearchBar />
      </div>
      <div className="flex items-center order-2">
        <NavLink to={"/"}>
          <svg
            className="sm:hidden text-gray-600 dark:text-gray-400"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Search">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
              fill="currentColor"
            />
          </svg>
        </NavLink>
        {authState.isAuthenticated && (
          <NavLink
            to="/new"
            className="flex max-sm:hidden p-2 mr-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
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
            <span>write</span>
          </NavLink>
        )}
        {!authState.isAuthenticated && <AuthButton />}
        {authState.isAuthenticated && (
          <>
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <span className="sr-only">View notifications</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20">
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
            </button>
            <UserSettingIcon />
          </>
        )}
        <ChangeTheme />
      </div>
    </nav>
  );
};

export default NavBar;
