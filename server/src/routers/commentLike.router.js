import express from "express";
const router = express.Router();

import {
  getCommentLikes,
  likeComment,
  unlikeComment,
} from "../controllers/like.controller.js";

router.route("/:commentId").get(getCommentLikes).post(likeComment);
router.route("/:commentId/:likeId").delete(unlikeComment);

export default router;
