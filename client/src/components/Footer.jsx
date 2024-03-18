import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="flex items-center justify-center py-4">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
