import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useFetchDeleteBlog = (id) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const deleteBlog = async () => {
    setIsLoading(true);
    const abortCont = new AbortController();
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/blogs/${id}`,
        {
          signal: abortCont.signal,
        }
      );
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    navigate("/");
  };

  return { response, error, isLoading, handleDelete };
};

export default useFetchDeleteBlog;
