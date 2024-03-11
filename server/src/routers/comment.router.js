import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.route.get("/", getComments).post("/", createComment);
router.delete("/:id", deleteComment);
