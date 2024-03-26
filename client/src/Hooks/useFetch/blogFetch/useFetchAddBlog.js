import useFetch from "../../useFetch";

const useFetchAddBlog = () => {
  const { response, isLoading, error, fetchData } = useFetch();

  const createNewBlog = async (data) => {
    await fetchData(`blogs`, {
      method: "POST",
      data: data,
    });
  };

  return { response, isLoading, error, createNewBlog };
};

export default useFetchAddBlog;
