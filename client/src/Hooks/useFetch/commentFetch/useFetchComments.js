import { useCallback, useEffect, useState } from "react";
import useFetchPrivate from "../useFetchPrivate";

const useFetchComments = (blogId) => {
  const { response, error, isLoading, fetchData } = useFetchPrivate();
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const getComments = useCallback(async (page, limit) => {
    if (page && limit) {
      await fetchData(`${blogId}/comments?page=${page}&limit=${limit}`);
    } else {
      await fetchData(`${blogId}/comments`);
    }
  }, []);

  useEffect(() => {
    if (response?.data?.previous) {
      setComments((prevComments) => [
        ...prevComments,
        ...response.data.results,
      ]);
    } else {
      setComments(response?.data?.results);
    }

    if (response?.data?.next) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [response]);

  return { comments, isLoading, error, getComments, hasMore };
};

export default useFetchComments;
