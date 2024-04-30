import asyncHandler from "express-async-handler";
import { Comment } from "../models/comment.model.js";
import { ServerError } from "../utils/ServerError.js";

const isAuthorComment = asyncHandler(async (req, res, next) => {
  const commentId = req?.params?.commentId;
  const blogId = req?.params?.blogId;
  const userId = req?.user?._id;

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new ServerError(404, "Comment not found");
  }

  console.log(comment.author)
  console.log(userId)
  

  if (!comment.author.equals(userId)) {
    throw new ServerError(403, "You are not authorized to delete this comment");
  }

  next();
});

export { isAuthorComment };
