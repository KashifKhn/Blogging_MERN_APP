import { useEffect } from "react";
import useFetch from "../useFetch";

const useFetchBlogs = () => {
  const { response, isLoading, error, fetchData, abortFetch } = useFetch();
  const blogs = response?.data;

  const fetchBlogs = async () => {
    await fetchData(`blogs`);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, isLoading, error };
};

export default useFetchBlogs;
