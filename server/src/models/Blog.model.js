import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    post: {
      type: String,
    },
    postFormat: {
      type: String,
      enum: ["editor", "markdown"],
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

export const Blog = model("Blog", blogSchema);
