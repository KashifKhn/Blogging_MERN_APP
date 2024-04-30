import asyncHandler from "express-async-handler";
import { Blog } from "../models/blog.model.js";
import { ServerError } from "../utils/ServerError.js";

const isAuthorBlog = asyncHandler(async (req, res, next) => {
  const blogId = req?.params?.id;
  const userId = req?.user?._id;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new ServerError(404, "Blog not found. Please check the id.");
  }

  if (!blog.author.equals(userId)) {
    throw new ServerError(403, "You are not the author of this blog");
  }

  next();
});

export { isAuthorBlog };
