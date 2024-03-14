import React from "react";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import useFetchComments from "../../Hooks/useFetchComments";

const CommentList = () => {
  const { id: blogId } = useParams();

  const { comments, isLoading, error, refetch } = useFetchComments(blogId);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (error) {
    return <p>Failed to load comments: {error.message}</p>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentList;
