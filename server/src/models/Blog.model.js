import { Schema, model } from "mongoose";
import Comment from "../models/comment.model.js";

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

blogSchema.post("findOneAndDelete", async (blogs) => {
  if (blogs) {
    await Comment.deleteMany({ _id: { $in: blogs.comments } });
  }
}); 

const Blog = model("Blog", blogSchema);

export default Blog;
