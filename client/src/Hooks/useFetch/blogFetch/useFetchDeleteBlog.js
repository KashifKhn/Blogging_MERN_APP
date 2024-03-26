import useFetch from "../../useFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    toast.success("Blog deleted successfully!", {
      autoClose: 1500,
    });
    navigate("/");
  };

  return { response, error, isLoading, handleDelete };
};

export default useFetchDeleteBlog;
