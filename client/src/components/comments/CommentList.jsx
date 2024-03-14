import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, handleDelete }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CommentList;
