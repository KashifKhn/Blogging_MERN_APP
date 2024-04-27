import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFetchPrivate from "../useFetchPrivate";

const useFetchUpdateBlog = (id, newData) => {
  const navigate = useNavigate();
  const { response, isLoading, error, fetchData } = useFetchPrivate();
  const updateBlog = async () => {
    await fetchData(`blogs/edit/${id}`, {
      method: "PUT",
      data: newData,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBlog();
    toast.success("Blog updated successfully!", {
      autoClose: 1500,
    });
    navigate(`/${id}`);
  };

  return { response, isLoading, error, handleUpdate };
};

export default useFetchUpdateBlog;
