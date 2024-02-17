import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model("Blog", blogSchema);
