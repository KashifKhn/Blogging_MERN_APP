import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, handleDelete, lastCommentElementRef }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        if (comments.length === index + 1) {
          return (
            <CommentCard
              key={comment._id}
              comment={comment}
              handleDelete={handleDelete}
              ref={lastCommentElementRef}
            />
          );
        } else {
          return (
            <CommentCard
              key={comment._id}
              comment={comment}
              handleDelete={handleDelete}
            />
          );
        }
      })}
    </div>
  );
};

export default CommentList;
