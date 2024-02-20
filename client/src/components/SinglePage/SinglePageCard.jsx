import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import Buttons from "./Buttons";
import DOMPurify from "dompurify";
import Markdown from "react-markdown";

const SinglePageCard = () => {
  const { id } = useParams();
  const { blog } = useFetchSingleBlog(id);

  const purify = (html) => {
    const cleanHtml = DOMPurify.sanitize(html);
    console.log(cleanHtml);

    return cleanHtml;
  };

  const createMarkup = (html) => {
    return parse(purify(html));
  };

  return (
    <Card className="w-full border-0">
      <Card.Header className="mb-4 border-0">
        <div className="flex w-full max-md:flex-col-reverse gap-4">
          <h2 className="text-[3rem] font-bold">{blog.title}</h2>
          <Buttons id={id} />
        </div>
      </Card.Header>
      <Card.Img
        variant="top"
        className="rounded-xl"
        src={blog.imgUrl}
      />
      {blog.postFormat === "editor" && (
        <Card.Body>
          <div className={`default-style max-w-[1000px] mx-auto`}>
            {createMarkup(blog.post)}
          </div>
        </Card.Body>
      )}
      {blog.postFormat === "markdown" && (
        <Card.Body>
          <div className="default-style max-w-[1000px] mx-auto">
            <Markdown>{blog.post.trim()}</Markdown>
          </div>
        </Card.Body>
      )}
    </Card>
  );
};

export default SinglePageCard;
