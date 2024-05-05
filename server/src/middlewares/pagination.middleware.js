import { ServerError } from "../utils/ServerError";
import asyncHandler from "express-async-handler";

function pagination(model) {
  return asyncHandler(async (req, res, next) => {
    if (!req.query.page || !req.query.limit) {
      next();
    }
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
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      ServerError(500, "Error in pagination middleware." + e.message);
    }
  });
}

export { pagination };
