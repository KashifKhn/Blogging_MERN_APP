import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";
import { ServerError } from "../utils/ServerError.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
 
  const token =
    (req.headers?.authorization && req.headers.authorization.split(" ")[1]) ||
    req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ServerError(401, "Unauthorized");
  }
});

export { verifyJwt };
