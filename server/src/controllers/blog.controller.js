import  Blog  from "../models/blog.model.js";
import asyncHandler from "express-async-handler";

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog(req.body);

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.title = req.body.title;
    blog.imgUrl = req.body.imgUrl;
    blog.post = req.body.post;
    blog.postFormat = req.body.postFormat;
    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
