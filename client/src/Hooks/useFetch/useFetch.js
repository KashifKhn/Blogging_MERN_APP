import { useState } from "react";
import { axiosPublic } from "../../api/axiosInstance";

const useFetch = (initialData = null) => {
  const [response, setResponse] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

  const fetchData = async (url, options) => {    
    setIsLoading(true);
    try {
      const res = await axiosPublic(url, {
        ...options,
        signal: abortController.signal,
      });
      setResponse(res);
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const abortFetch = () => {
    abortController.abort();
  };

  return { response, isLoading, error, fetchData, abortFetch };
};

export default useFetch;
