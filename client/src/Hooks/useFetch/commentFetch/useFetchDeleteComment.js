import useFetch from "../useFetch";

const useFetchDeleteComment = () => {
  const { response, error, isLoading, fetchData } = useFetch();

  const deleteComment = async (blogId, commentId) => {
    fetchData(`${blogId}/comments/${commentId}`, {
      method: "DELETE",
    });
  };

  const handleDelete = async (blogId, commentId) => {
    await deleteComment(blogId, commentId);
  };

  return { response, error, isLoading, handleDelete };
};

export default useFetchDeleteComment;
