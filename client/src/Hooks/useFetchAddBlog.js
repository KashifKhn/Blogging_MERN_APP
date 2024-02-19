import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useFetchAddBlog = (data) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createNewBlog = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}`,
        data
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
    navigate("/");
  };
  return { response, error, isLoading, handleSubmit };
};

export default useFetchAddBlog;
