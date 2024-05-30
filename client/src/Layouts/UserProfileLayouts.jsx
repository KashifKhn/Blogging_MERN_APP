import React from "react";
import Header from "../components/UserProfile/Header";
import { Outlet } from "react-router-dom";

const UserProfileLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserProfileLayouts;
