import React, { useEffect } from "react";

import NavBar from "./NavBar";
import useAuth from "../../Hooks/auth/useAuth";
import useLogout from "../../Hooks/auth/useLogout";

const Header = () => {
  const { authState, persistent, setPersistent } = useAuth();
  const { logout } = useLogout();

  useEffect(() => {
    const handleAfterLoad = (event) => {
      if(!authState.isAuthenticated) {
        setPersistent(false);
      }
      if (!persistent) {
        console.log("logging out");
        logout();
        setPersistent(false);
      }
    };

    window.addEventListener("load", handleAfterLoad);

    return () => {
      window.removeEventListener("load", handleAfterLoad);
    };
  }, []);

  return (
    <header className="antialiased border-b-2 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
      <NavBar />
    </header>
  );
};

export default Header;
