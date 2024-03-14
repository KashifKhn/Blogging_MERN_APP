import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useFetchAddComment = (data, blogId) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createNewBlog = async () => {
    setIsLoading(true);

    const abortCont = new AbortController();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/${blogId}/comments`,
        data,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewBlog();
    navigate(`/${blogId}`);
  };
  return { response, error, isLoading, handleSubmit };
};

export default useFetchAddComment;
