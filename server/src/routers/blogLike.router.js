import express from "express";
const router = express.Router();

import {
  getBlogLikes,
  likeBlog,
  unlikeBlog,
} from "../controllers/like.controller.js";

router.route("/:blogId").get(getBlogLikes).post(likeBlog);
router.route("/:blogId/:likeId").delete(unlikeBlog);

export default router;
