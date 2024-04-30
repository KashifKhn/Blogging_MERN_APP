import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ServerError } from "../utils/ServerError.js";

const tokenGenerator = (user) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateAndStoreRefreshToken();
  return { accessToken, refreshToken };
};

const register = asyncHandler(async (req, res) => {
  const { email, password, username, fullname, profilePicture, bio } = req.body;

  if (
    [fullname, email, username, password].some(
      (field) => !field?.trim() === "" || !field
    )
  ) {
    throw new ServerError(400, "All fields are required");
  }

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    throw new ServerError(409, "Email already exists");
  }

  const isUsernameExist = await User.findOne({ username });

  if (isUsernameExist) {
    throw new ServerError(409, "Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);


  const user = new User({
    email,
    password: hashedPassword,
    username,
    fullname,
    profilePicture,
    bio,
  });

  if (!user) {
    throw new ServerError(500, "Failed to create user");
  }

  await user.save();

  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
      profilePicture: user.profilePicture,
      bio: user.bio,
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => field?.trim() === "" || !field)) {
    throw new ServerError(400, "All fields are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ServerError(404, "User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ServerError(401, "Invalid password");
  }

  const { refreshToken, accessToken } = tokenGenerator(user);
  user.refreshToken = refreshToken;
  await user.save();

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  };

  res
    .cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 1 * 24 * 60 * 60 * 1000,
    })
    .cookie("accessToken", accessToken, cookieOptions)
    .status(200)
    .json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        username: user.username,
        accessToken,
      },
    });
});

const logout = asyncHandler(async (req, res) => {
  const user = req.user;
  user.refreshToken = "";
  await user.save();
  res.clearCookie("refreshToken").clearCookie("accessToken").status(200).json({
    message: "User logged out successfully",
  });
});

const refresh = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw new ServerError(401, "Refresh token not found");
  }

  const isRefreshTokenValid = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw new ServerError(401, "Refresh token expired");
        }
        throw new ServerError(400, "Invalid refresh token");
      }
      return decoded;
    }
  );

  if (!isRefreshTokenValid) {
    throw new ServerError(401, "Invalid refresh token");
  }

  const user = await User.findById(isRefreshTokenValid._id);

  const { accessToken } = tokenGenerator(user);

  res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .json({
      message: "Token refreshed successfully",
      user: {
        _id: user._id,
        username: user.username,
        accessToken,
      },
    });
});

export { register, login, logout, refresh };
