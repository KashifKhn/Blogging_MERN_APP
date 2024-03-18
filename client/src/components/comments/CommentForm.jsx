import React from "react";

const CommentForm = ({ commentText, setCommentText, handleSubmit }) => {
  return (
    <div className="m-8 pt-8">
      <form
        className="mb-6 flex flex-col items-end"
        onSubmit={handleSubmit}
      >
        <div className="py-2 w-full px-4 mb-4 rounded-lg border-b-4 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <label
            htmlFor="comment"
            className="sr-only"
          >
            Your comment
          </label>
          <textarea
            id="comment"
            rows={5}
            className="px-0 w-full text-sm resize-none text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required={true}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-blue-200  hover:bg-blue-800"
          >
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
