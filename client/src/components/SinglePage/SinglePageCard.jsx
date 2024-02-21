import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import Buttons from "./Buttons";
import { convertHtml, convertMarkdown } from "../../utils/blogConverter";
const SinglePageCard = () => {
  const { id } = useParams();
  const { blog } = useFetchSingleBlog(id);

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
      <Card.Body>
        <div className={`prose max-w-[1000px] mx-auto`}>
          {blog.postFormat === "editor"
            ? convertHtml(blog.post)
            : convertMarkdown(blog.post)}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SinglePageCard;
