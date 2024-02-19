import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import Buttons from "./Buttons";

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
        <Card.Text className="text-[1.5rem] my-8">{blog.description}</Card.Text>
      </Card.Header>
      <Card.Img
        variant="top"
        className="rounded-xl"
        src={blog.imgUrl}
      />
      <Card.Body>
        <div className="text-[1.5rem] leading-loose tracking-wide text-justify">
          {parse(`${blog.content}`)}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SinglePageCard;
