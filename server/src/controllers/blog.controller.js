import { Blog } from "../models/blog.model.js";
import { User } from "../models/User.model.js";
import asyncHandler from "express-async-handler";
import { ServerError } from "../utils/ServerError.js";

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  if (!blogs || blogs.length === 0) {
    throw new ServerError(404, "No blogs found in the database.");
  }
  const authors = await User.find().select("_id email username fullname");
  if (!authors) {
    throw new ServerError(404, "Authors not found.");
  }
  blogs.forEach((blog) => {
    const author = authors.find((author) => author._id.equals(blog.author));
    blog.author = author;
  });
  if (!req.query.page || !req.query.limit) {
    res.status(200).json(blogs);
  } else {
    const paginatedResults = res.paginatedResults;
    paginatedResults.results.forEach((blog) => {
      console.log(blog);
      const author = authors.find((author) => author._id.equals(blog.author));
      blog.author = author;
    });
    res.status(200).json(paginatedResults);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    throw new ServerError(404, "Blog not found. Please check the id.");
  }
  const authorId = blog.author;
  const author = await User.findById(authorId).select(
    "_id email username fullname"
  );
  if (!author) {
    throw new ServerError(404, "Author not found.");
  }
  blog.author = author;
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
