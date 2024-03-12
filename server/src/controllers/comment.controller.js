import asyncHandler from "express-async-handler";
import Comment from "../models/comment.model.js";
import Blog from "../models/blog.model.js";
import { ServerError } from "../utils/ServerError.js";

const getComments = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const comments = await Blog.findById(blogId)
    .populate("comments")
    .select("comments");
  if (!comments || comments.length === 0) {
    res.status(404).json({ message: "Blog not found" });
  }
  res.status(200).json(comments.comments);
});

const createComment = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const { comment } = req.body;
  const blog = await Blog.findById(blogId);
  if (!blog) {
   throw new ServerError(404, "Blog not found") 
  }
  const newComment = new Comment({ comment });
  if(!newComment) {
    throw new ServerError(500, "Comment could not be created")
  }
  await newComment.save();
  blog.comments.push(newComment);
  await blog.save();
  res.status(201).json(newComment);
});

const deleteComment = asyncHandler(async (req, res) => {
  const { blogId, commentId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ServerError(404, "Blog not found");
  }
  const comment = await Comment.findByIdAndDelete(commentId);
  if (!comment) {
    throw new ServerError(404, "Comment not found");
  }
  blog.comments = blog.comments.filter(
    (comment) => comment.toString() !== commentId
  );
  await blog.save();
  res.status(200).json({ message: "Comment removed" });
});

export { getComments, createComment, deleteComment };
