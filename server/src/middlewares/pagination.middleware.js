import { ServerError } from "../utils/ServerError.js";
import asyncHandler from "express-async-handler";

function pagination(model) {
  return asyncHandler(async (req, res, next) => {
    if (!req.query.page || !req.query.limit) {
      return next();
    }
    const { blogId } = req.params;

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    const total = await model.countDocuments().exec();
    results.total = total;
    if (endIndex < total) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      if (blogId) {
        const comments = await model
          .findById(blogId)
          .populate({
            path: "comments",
            options: {
              sort: { createdAt: -1 },
              limit: limit,
              skip: startIndex,
            },
          })
          .exec();
        if (!comments || comments.length === 0) {
          throw new ServerError(404, "No comments found in the database.");
        }
        results.results = comments.comments;
        res.paginatedResults = results;
        return next();
      }

      results.results = await model
        .find()
        .limit(limit)
        .skip(startIndex)
        .sort({ createdAt: -1 })
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      throw new ServerError(
        500,
        "Error in pagination middleware." + e?.message
      );
    }
  });
}

export { pagination };
