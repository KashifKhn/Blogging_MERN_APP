import Blog from "../models/blog.model.js";
import asyncHandler from "express-async-handler";
import { ServerError } from "../utils/ServerError.js";

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  if (!blogs || blogs.length === 0) {
    throw new ServerError(404, "No blogs found in the database.");
  }
  res.status(200).json(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    throw new ServerError(404, "Blog not found. Please check the id.");
  }
  res.status(200).json(blog);
});

const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog(req.body);
  const newBlog = await blog.save();
  if (!newBlog) {
    throw new ServerError(500, "Blog could not be created.");
  }
  res.status(201).json(newBlog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    throw new ServerError(404, "Blog not found. Please check the id.");
  }
  blog.title = req.body.title;
  blog.imgUrl = req.body.imgUrl;
  blog.post = req.body.post;
  blog.postFormat = req.body.postFormat;
  const updatedBlog = await blog.save();
  if (!updatedBlog) {
    throw new ServerError(500, "Blog could not be updated.");
  }
  res.status(200).json(updatedBlog);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  if (!deletedBlog) {
    throw new ServerError(404, "Blog not found. Please check the id.");
  }
  res.status(200).json({ message: "Blog deleted" });
});

export { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
