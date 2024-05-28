import useFetchPrivate from "../useFetchPrivate";

const useFetchAddComment = (data, blogId) => {
  const { response, error, isLoading, fetchData } = useFetchPrivate();

  const createNewBlog = async () => {
    fetchData(`${blogId}/comments`, {
      method: "POST",
      data: data,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.comment.value.trim() === "") {
      e.target.comment.value = "";
      return;
    }

    await createNewBlog();
  };
  return { response, error, isLoading, handleSubmit };
};

export default useFetchAddComment;
