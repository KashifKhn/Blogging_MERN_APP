import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../../Hooks/useFetch/blogFetch/useFetchSingleBlog";
import { convertHtml, convertMarkdown } from "../../utils/blogConverter";
import Header from "./Header";
import LoadingSkeleton from "./LoadingSkeleton";

const SinglePageCard = () => {
  const { id } = useParams();
  const { response, error, isLoading, refetch } = useFetchSingleBlog(id);
  const blog = response?.data;

  if (isLoading || !blog) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <article className="pt-4 pb-16 px-4 lg:pt-8 lg:pb-24 antialiased mx-auto w-full  dark:bg-gray-900 ">
      <Header blog={blog} />
      <div className="flex flex-wrap gap-2">
        {blog?.topics.map((topic) => (
          <span
            key={topic}
            className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            {topic}
          </span>
        ))}
      </div>

      <figure className=" mx-auto mt-8">
        <img
          className="h-auto w-full rounded-lg"
          src={blog?.imgUrl}
          alt="image description"
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"></figcaption>
      </figure>
      <section className="prose w-full min-w-full dark:prose-invert">
        {blog?.postFormat === "markdown"
          ? convertMarkdown(blog?.post)
          : convertHtml(blog?.post)}
      </section>
    </article>
  );
};

export default SinglePageCard;
