import { useState } from "react";
import useAxiosInterceptor from "../api/useAxiosInterceptor";

const useFetchPrivate = (initialData = null) => {
  const [response, setResponse] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortController = new AbortController();
  const axiosPrivate = useAxiosInterceptor();

  const fetchData = async (url, options) => {
    setIsLoading(true);
    try {
      const res = await axiosPrivate(url, {
        ...options,
        signal: abortController.signal,
      });
      setResponse(res);
    } catch (error) {
      console.log(error.response.data)
      setError(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const abortFetch = () => {
    abortController.abort();
  };

  return { response, isLoading, error, fetchData, abortFetch };
};

export default useFetchPrivate;
