import { useEffect } from "react";

import NavBar from "./NavBar";
import useAuth from "../../Hooks/auth/useAuth";
import useLogout from "../../Hooks/auth/useLogout";
import FilterBar from "./Filter/FilterBar";

const Header = () => {
  const { authState, persistent, setPersistent } = useAuth();
  const { logout } = useLogout();

  useEffect(() => {
    const handleAfterLoad = () => {
      if (!authState.isAuthenticated) {
        setPersistent(false);
      }
      if (!persistent) {
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
    <header className="antialiased dark:bg-gray-900 border-gray-200 dark:border-gray-700">
      <NavBar />
      <FilterBar />
    </header>
  );
};

export default Header;
