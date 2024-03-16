import { Blog } from "../models/blog.model.js";
import { Like } from "../models/like.model.js";
import asyncHandler from "express-async-handler";
import { ServerError } from "../utils/ServerError.js";

const getBlogLikes = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blogLike = await Blog.findById(blogId)
    .populate("likes")
    .select("likes");
  if (!blogLike) {
    throw new ServerError(404, "Blog not found");
  }
  res.status(200).json({likes: blogLike, totalLikes: blogLike.likes.length});
});

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ServerError(404, "Blog not found");
  }
  const like = new Like({ blog: blogId });
  if (!like) {
    throw new ServerError(500, "Error creating like");
  }
  
  await like.save();
  blog.likes.push(like);
  await blog.save();
  res.status(201).json(like);
});

const unlikeBlog = asyncHandler(async (req, res) => {
    const { blogId, likeId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new ServerError(404, "Blog not found");
    }
    const like = await Like.findById(likeId);
    if (!like) {
      throw new ServerError(404, "Like not found");
    }
    blog.likes = blog.likes.filter((like) => like.toString() !== likeId);
    await blog.save();
    await Like.findByIdAndDelete(likeId);
    res.status(200).json({ message: "Like removed" });
});

export { getBlogLikes, likeBlog, unlikeBlog };
