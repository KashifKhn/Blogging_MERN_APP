import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";

const SinglePageCard = () => {
  const { id } = useParams();
  const { blog } = useFetchSingleBlog(id);
  console.log(blog);

  return (
    <Card className="w-full border-0">
      <Card.Header>
        <Card.Title>
          <h2 className="text-[3rem]">{blog.title}</h2>
        </Card.Title>
        <Card.Text className="text-[1.5rem] my-8">{blog.description}</Card.Text>
      </Card.Header>
      <Card.Img
        variant="top"
        className="rounded-xl"
        src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card.Body>
        <Card.Text className="text-[1.5rem] leading-loose tracking-wide">{blog.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePageCard;
