import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

const useFetchDeleteBlog = () => {
  const navigate = useNavigate();
  const { response, isLoading, error, fetchData } = useFetch();
  const deleteBlog = async (id) => {
    await fetchData(`blogs/${id}`, {
      method: "DELETE",
    });
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    navigate("/");
  };

  return { response, error, isLoading, handleDelete };
};

export default useFetchDeleteBlog;
