import asyncHandler from "express-async-handler";
import Comment from "../models/comment.model.js";
import Blog from "../models/blog.model.js";

const getComments = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const comments = await Blog.findById(blogId)
    .populate("comments")
    .select("comments");
  if (!comments || comments.length === 0) {
    res.status(404).json({ message: "Blog not found" });
  }
  res.status(200).json(comments);
});

const createComment = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const { comment } = req.body;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  }
  const newComment = new Comment({ comment });
  await newComment.save();
  blog.comments.push(newComment);
  await blog.save();
  res.status(201).json(newComment);
});

const deleteComment = asyncHandler(async (req, res) => {
  const { blogId, commentId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  }
  const comment = await Comment.findById(commentId);
  if (!comment) {
    res.status(404).json({ message: "Comment not found" });
  }
  blog.comments = blog.comments.filter(
    (comment) => comment.toString() !== commentId
  );
  await blog.save();
  await comment.remove();
  res.status(200).json({ message: "Comment removed" });
});

export { getComments, createComment, deleteComment };
