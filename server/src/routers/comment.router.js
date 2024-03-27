import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = express.Router({
  mergeParams: true,
});

router.route("/").get(getComments).post(verifyJwt, createComment);
router.delete("/:commentId", verifyJwt, deleteComment);

export default router;
