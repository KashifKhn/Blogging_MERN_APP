import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetchSingleBlog = (id) => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const abortCont = new AbortController();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/blogs/${id}`,
        {
          signal: abortCont.signal,
        }
      );
      setBlog(response.data);
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

  return { blog, isLoading, error, refetch: fetchData };
};

export default useFetchSingleBlog;
