import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetchBlogs = (blogId) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const abortCont = new AbortController();
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/${blogId}/comments`,
        {
          signal: abortCont.signal,
        }
      );
      setComments(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        setIsLoading(false);
        setError(error.message);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { comments, isLoading, error, refetch: fetchData };
};

export default useFetchBlogs;
