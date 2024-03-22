import express from "express";
import {
  register,
  login,
  logout,
  refresh,
} from "../controllers/auth.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.use(verifyJwt);
router.post("/logout", logout);
router.get("/refresh", refresh);

export default router;
