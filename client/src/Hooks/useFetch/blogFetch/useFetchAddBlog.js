import useFetchPrivate from "../useFetchPrivate";

const useFetchAddBlog = () => {
  const { response, isLoading, error, fetchData } = useFetchPrivate();

  const createNewBlog = async (data) => {
    await fetchData(`blogs`, {
      method: "POST",
      data: data,
    });
  };

  return { response, isLoading, error, createNewBlog };
};

export default useFetchAddBlog;
