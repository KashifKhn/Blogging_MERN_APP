import { Schema, Model } from "mongoose";

const blogSchema = new Schema({
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
});

export const Blog = Model("Blog", blogSchema);
