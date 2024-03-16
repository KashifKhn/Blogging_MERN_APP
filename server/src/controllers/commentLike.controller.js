import { Like } from "../models/like.model.js";
import { Comment } from "../models/comment.model.js";
import asyncHandler from "express-async-handler";
import { ServerError } from "../utils/ServerError.js";

const getCommentLikes = asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const commentLike = await Comment.findById(commentId)
        .populate("likes")
        .select("likes");
    if (!commentLike) {
        throw new ServerError(404, "Comment not found");
    }
    res.status(200).json({ likes: commentLike.likes, totalLikes: commentLike.likes.length });
});

const likeComment = asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
        throw new ServerError(404, "Comment not found");
    }
    const like = new Like({ comment: commentId });
    if (!like) {
        throw new ServerError(500, "Error creating like");
    }

    await like.save();
    comment.likes.push(like);
    await comment.save();
    res.status(201).json(like);
});

const unlikeComment = asyncHandler(async (req, res) => {
    const { commentId, likeId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
        throw new ServerError(404, "Comment not found");
    }
    const like = await Like.findById(likeId);
    if (!like) {
        throw new ServerError(404, "Like not found");
    }
    comment.likes = comment.likes.filter((like) => like.toString() !== likeId);
    await comment.save();
    await Like.findByIdAndDelete(likeId);
    res.status(200).json({ message: "Like removed" });
});

export { getCommentLikes, likeComment, unlikeComment };
