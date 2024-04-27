import { useEffect } from "react";
import useFetchPrivate from "../useFetchPrivate";

const useFetchSingleBlog = (id) => {
  const { response, isLoading, error, fetchData } = useFetchPrivate();

  useEffect(() => {
    fetchData(`blogs/${id}`, { method: "GET" });
  }, []);

  return { response, isLoading, error, refetch: fetchData };
};

export default useFetchSingleBlog;
