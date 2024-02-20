import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/edit/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
