import asyncHandler from "express-async-handler";
import { Blog } from "../models/blog.model.js";
import { ServerError } from "../utils/ServerError.js";

const isAuthorBlog = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const userId = req?.user?._id;

  const blog = await Blog.findById(blogId);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (blog.author.toString() !== userId.toString()) {
    throw new ServerError(403, "You are not the author of this blog");
  }

  next();
});

export { isAuthorBlog };
