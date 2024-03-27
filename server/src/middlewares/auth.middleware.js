import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";
import { ServerError } from "../utils/ServerError.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
  const token =
    (req.headers?.authorization && req.headers.authorization.split(" ")[1]) ||
    (req.headers?.Authorization && req.headers.Authorization.split(" ")[1]) ||
    req.cookies?.accessToken;

  if (!token) {
    throw new ServerError(401, "Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      throw new ServerError(401, "Unauthorized");
    }

    const user = await User.findById(decoded._id).select("-password");

    if (!user) {
      throw new ServerError(401, "Unauthorized");
    }
    req.user = user;
    next();
  } catch (error) {
    
    throw new ServerError(401, error?.message + " Access Token Expired");
  }
});

export { verifyJwt };
