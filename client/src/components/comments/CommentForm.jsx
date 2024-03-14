import React from "react";

const CommentForm = () => {
  return (
    <div className="m-8 border-y-2 pt-8">
      <form className="mb-6 flex flex-col items-end">
        <div className="py-2 w-full px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label
            htmlFor="comment"
            className="sr-only"
          >
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required=""
            style={{ height: 116 }}
            defaultValue={""}
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"

          >
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
