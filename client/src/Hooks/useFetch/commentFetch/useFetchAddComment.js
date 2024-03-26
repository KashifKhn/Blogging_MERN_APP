import useFetch from "../useFetch";

const useFetchAddComment = (data, blogId) => {
  const { response, error, isLoading, fetchData } = useFetch();

  const createNewBlog = async () => {
    fetchData(`${blogId}/comments`, {
      method: "POST",
      data: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewBlog();
  };
  return { response, error, isLoading, handleSubmit };
};

export default useFetchAddComment;
