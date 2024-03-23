import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = () => {
    if (isDarkTheme) {
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    }
  };

  return { isDarkTheme, handleThemeChange };
};

export default useTheme;
