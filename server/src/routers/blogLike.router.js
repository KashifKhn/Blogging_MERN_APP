import express from "express";
const router = express.Router();

import {
  getBlogLikes,
  likeBlog,
  unlikeBlog,
} from "../controllers/blogLike.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

router.route("/:blogId").get(getBlogLikes).post(verifyJwt, likeBlog);
router.route("/:blogId/:likeId").delete(verifyJwt, unlikeBlog);

export default router;
