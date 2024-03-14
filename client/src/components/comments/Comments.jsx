import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import useFetchAddComment from "../../Hooks/useFetchAddComment";
import useFetchComments from "../../Hooks/useFetchComments";

const Comments = () => {
  const { id: blogId } = useParams();
  const [commentText, setCommentText] = useState("");

  const { response, handleSubmit } = useFetchAddComment(
    {
      comment: commentText,
    },
    blogId
  );

  const { comments, isLoading, error, refetch } = useFetchComments(blogId);
  
  useEffect(() => {
    if (response) {
      setCommentText("");
      refetch();
    }
  }, [response]);

  return (
    <div>
      <CommentForm
        commentText={commentText}
        setCommentText={setCommentText}
        handleSubmit={handleSubmit}
      />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comments;
