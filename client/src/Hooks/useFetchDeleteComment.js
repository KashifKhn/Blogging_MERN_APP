import { useState } from "react";
import axios from "axios";

const useFetchDeleteComment = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteComment = async (blogId, commentId) => {
    setIsLoading(true);
    const abortCont = new AbortController();
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/${blogId}/comments/${commentId}`,
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

  const handleDelete = async (blogId, commentId) => {
    await deleteComment(blogId, commentId);
  };

  return { response, error, isLoading, handleDelete };
};

export default useFetchDeleteComment;
