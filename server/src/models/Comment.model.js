import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
