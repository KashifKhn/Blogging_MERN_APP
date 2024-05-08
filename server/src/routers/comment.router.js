import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { isAuthorComment } from "../middlewares/isAuthorComment.middleware.js";
import { pagination } from "../middlewares/pagination.middleware.js";
import { Blog } from "../models/blog.model.js";

const router = express.Router({
  mergeParams: true,
});

router
  .route("/")
  .get(pagination(Blog), getComments)
  .post(verifyJwt, createComment);
router.delete("/:commentId", verifyJwt, isAuthorComment, deleteComment);

export default router;
