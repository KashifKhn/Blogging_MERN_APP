import React, { useEffect } from "react";
import useTheme from "../../Hooks/theme/useTheme";
import LoadingSkeleton from "../HomePage/LoadingSkeleton";

const PersistanceLoadingSkeleton = () => {
  const { isDarkTheme } = useTheme();
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    }
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [isDarkTheme]);
  return (
    <div className="dark:bg-gray-900">
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
    </div>
  );
};

export default PersistanceLoadingSkeleton;
