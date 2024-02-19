import React from "react";
import useFetchDeleteBlog from "../../Hooks/useFetchDeleteBlog";
import { Link } from "react-router-dom";
const Buttons = ({ id }) => {
  const { handleDelete } = useFetchDeleteBlog(id);
  return (
    <div className="flex gap-8 max-md:gap-2  md:ml-auto ">
      <Link
        to={`/edit/${id}`}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md  px-3 md:px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Edit
      </Link>
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md  px-3 md:px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
