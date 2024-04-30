import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { isAuthorBlog } from "../middlewares/isAuthorBlog.middleware.js";

const router = Router();

router.get("/", getBlogs);

router.use(verifyJwt);

router.get("/:id", getBlog);
router.post("/", createBlog);

router.use(isAuthorBlog);

router.put("/edit/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
