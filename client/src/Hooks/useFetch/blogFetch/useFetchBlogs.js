import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const useFetchBlogs = () => {
  const [hasMore, setHasMore] = useState(false);
  const { response, isLoading, error, fetchData, abortFetch } = useFetch();
  const [blogs, setBlogs] = useState([]);
  // const blogs = response?.data?.results;

  useEffect(() => {
    if (response?.data?.next) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }

    if (response?.data?.previous) {
      setBlogs((prevBlogs) => [...prevBlogs, ...response.data.results]);
    } else {
      setBlogs(response?.data?.results);
    }
  }, [response]);

  const fetchBlogs = async (page, limit) => {
    if (page && limit) {
      await fetchData(`blogs?page=${page}&limit=${limit}`);
      return;
    }
    await fetchData("blogs");
  };

  // useEffect(() => {
  //   fetchBlogs(1, 5);
  // }, []);

  return { blogs, isLoading, error, fetchBlogs, hasMore };
};

export default useFetchBlogs;
