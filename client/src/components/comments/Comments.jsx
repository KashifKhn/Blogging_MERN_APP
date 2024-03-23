import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import useFetchAddComment from "../../Hooks/useFetch/commentFetch/useFetchAddComment";
import useFetchComments from "../../Hooks/useFetch/commentFetch/useFetchComments";
import useFetchDeleteComment from "../../Hooks/useFetch/commentFetch/useFetchDeleteComment";

const Comments = () => {
  const { id: blogId } = useParams();
  const [commentText, setCommentText] = useState("");

  const { response: addResponse, handleSubmit } = useFetchAddComment(
    {
      comment: commentText,
    },
    blogId
  );

  const { comments, isLoading, error, refetch } = useFetchComments(blogId);
  const { response: deleteResponse, handleDelete } = useFetchDeleteComment();

  useEffect(() => {
    if (deleteResponse || addResponse) {
      setCommentText("");
      refetch();
    }
  }, [deleteResponse, addResponse]);

  return (
    <div className="pb-8">
      <CommentForm
        commentText={commentText}
        setCommentText={setCommentText}
        handleSubmit={handleSubmit}
      />
      <CommentList
        comments={comments}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Comments;
