import { useEffect, useRef } from "react";
import Editor from "./Editor";

const CommonForm = ({
  form,
  handleChange,
  post,
  setPost,
  handleSubmit,
  parentComp,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef?.current.focus();
  }, []);

  return (
    <form
      className="py-8 px-4 mx-auto max-w-2xl lg:py-16 dark:bg-gray-900 "
      onSubmit={handleSubmit}>
      <div>
        {parentComp === "edit" ? (
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Edit Your Idea
          </h2>
        ) : (
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Share Your Creative Ideas
          </h2>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            ref={inputRef}
            name="title"
            value={form.title}
            onChange={handleChange}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Title.."
            required=""
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image Url
          </label>
          <input
            type="url"
            name="imgUrl"
            id="name"
            value={form.imgUrl}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Image url"
            required=""
          />
        </div>
        <div className="sm:col-span-2 sm:flex sm:flex-row sm:gap-4 flex-col flex-wrap flex">
          <label className="block mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white">
            Post Format:{" "}
          </label>
          <div className="flex items-center mb-4">
            <input
              id="editor"
              type="radio"
              name="postFormat"
              value="editor"
              onChange={handleChange}
              disabled={parentComp === "edit" && form.postFormat === "markdown"}
              checked={form.postFormat === "editor"}
              className="w-4 h-4 border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600 dark:focus-visible:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="editor"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
              Editor
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="markdown"
              type="radio"
              name="postFormat"
              value="markdown"
              disabled={parentComp === "edit" && form.postFormat === "editor"}
              onChange={handleChange}
              checked={form.postFormat === "markdown"}
              className="w-4 h-4 border-gray-300 focus-visible:ring-2 focus-visible::ring-blue-300 dark:focus-visible:ring-blue-600 dark:focus-visible:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="markdown"
              className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Markdown
            </label>
          </div>
        </div>
        {form.postFormat === "editor" ? (
          <div className="sm:col-span-2 mb-16 sm:mb-5">
            <Editor
              value={post}
              handleChange={setPost}
            />
          </div>
        ) : (
          <div className="sm:col-span-2 mb-3">
            <label
              htmlFor="post"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Post
            </label>
            <textarea
              id="post"
              name="post"
              rows={15}
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write your post here..."
              required=""></textarea>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        {parentComp === "edit" ? "Update Ideas" : "Share Your Creative Ideas"}
      </button>
    </form>
  );
};

export default CommonForm;
