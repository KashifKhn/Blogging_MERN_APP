import express from "express";
const router = express.Router();

import {
  getBlogLikes,
  likeBlog,
  unlikeBlog,
} from "../controllers/blogLike.controller.js";

router.route("/:blogId").get(getBlogLikes).post(likeBlog);
router.route("/:blogId/:likeId").delete(unlikeBlog);

export default router;
