import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import { ServerError } from "../utils/ServerError.js";

const register = asyncHandler(async (req, res) => {
  const {
    email,
    password,
    username,
    fullname,
    profilePicture,
    bio,
  } = req.body;

  if (
    [fullname, email, username, password].some((field) => ! field?.trim() === "" || !field)
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
  console.log(hashedPassword);

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

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            fullname: user.fullname,
        },
    });
});

const logout = asyncHandler(async (req, res) => {
    
});

export { register, login, logout };
