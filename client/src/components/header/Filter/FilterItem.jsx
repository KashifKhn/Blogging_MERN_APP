/* eslint-disable react/prop-types */

const FilterItem = ({ title }) => {
  return (
    // <div className="flex min-w-fit items-center justify-center rounded-full bg-slate-300 px-4 py-1 text-center duration-700 ease-in-out">
    //   {title}
    // </div>
    <button className=" min-w-fit items-center cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200  justify-center rounded-full px-2 py-1 text-center duration-700 ease-in-out">
      {title}
    </button>
  );
};

export default FilterItem;
