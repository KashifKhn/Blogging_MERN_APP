import { useCallback, useEffect, useState } from "react";
import useFetchPrivate from "../useFetchPrivate";

const useFetchComments = (blogId) => {
  const { response, error, isLoading, fetchData } = useFetchPrivate();

  const getComments = useCallback(async () => {
    await fetchData(`${blogId}/comments`);
  }, []);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return { response, isLoading, error, refetch: getComments };
};

export default useFetchComments;
