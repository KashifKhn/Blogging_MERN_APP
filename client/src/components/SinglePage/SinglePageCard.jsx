import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SinglePageCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blog } = useFetchSingleBlog(id);
  console.log(blog);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/${id}`
      );
      const data = await res.data;
      console.log(data);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full border-0">
      <Card.Header className="mb-4 border-0">
        <Card.Title>
          <button className="btn btn-danger" onClick={handleDelete}>
            delete
          </button>
        </Card.Title>
      </Card.Header>
      <Card.Header className="mb-4 border-0">
        <Card.Title>
          <h2 className="text-[3rem]">{blog.title}</h2>
        </Card.Title>
        <Card.Text className="text-[1.5rem] my-8">{blog.description}</Card.Text>
      </Card.Header>
      <Card.Img variant="top" className="rounded-xl" src={blog.imgUrl} />
      <Card.Body>
        <Card.Text className="text-[1.5rem] leading-loose tracking-wide text-justify">
          {blog.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePageCard;
