import express from "express";
const router = express.Router();

import {
  getCommentLikes,
  likeComment,
  unlikeComment,
} from "../controllers/commentLike.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

router.route("/:commentId").get(getCommentLikes).post(verifyJwt, likeComment);
router.route("/:commentId/:likeId").delete(verifyJwt, unlikeComment);

export default router;
