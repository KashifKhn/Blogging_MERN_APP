import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    profilePicture: {
      type: String,
    },

    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRES_IN,
  });
};

UserSchema.methods.generateAndStoreRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRES_IN,
  });
};

const User = mongoose.model("User", UserSchema);

export { User };
