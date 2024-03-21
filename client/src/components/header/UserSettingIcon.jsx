import React from "react";

const UserSettingIcon = () => {
  return (
    <button
      type="button"
      className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown">
      <span className="sr-only">Open user menu</span>
      <img
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user photo"
      />
    </button>
  );
};

export default UserSettingIcon;
