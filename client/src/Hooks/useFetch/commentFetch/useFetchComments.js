import { useCallback, useEffect, useState } from "react";
import useFetch from "../../useFetch";

const useFetchComments = (blogId) => {
  const { response, error, isLoading, fetchData } = useFetch();

  const getComments = useCallback(async () => {
    await fetchData(`${blogId}/comments`);
  }, []);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return { response, isLoading, error, refetch: getComments };
};

export default useFetchComments;
