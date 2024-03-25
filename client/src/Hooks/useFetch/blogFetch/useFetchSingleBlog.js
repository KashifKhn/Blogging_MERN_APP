import { useEffect } from "react";
import useFetch from "../useFetch";

const useFetchSingleBlog = (id) => {
  const { response, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`blogs/${id}`, { method: "GET" });
  }, []);

  return { response, isLoading, error, refetch: fetchData };
};

export default useFetchSingleBlog;
