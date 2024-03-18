import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import { convertHtml, convertMarkdown } from "../../utils/blogConverter";
import Header from "./Header";

const SinglePageCard = () => {
  const { id } = useParams();
  const { blog } = useFetchSingleBlog(id);

  return (
    <article 
    className="pt-4 pb-16 px-4 lg:pt-8 lg:pb-24 antialiased mx-auto w-full  dark:bg-gray-900 ">
      <Header blog={blog} />
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
