import "dotenv/config";
import express from "express";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import corsOptions from "./config/corsOption.js";
import errorHandler from "./middlewares/errorHandler.js";
import blogRouter from "./routers/blog.router.js";
import commentRouter from "./routers/comment.router.js";
import blogLikeRouter from "./routers/blogLike.router.js";
import commentLikeRouter from "./routers/commentLike.router.js";
import authRouter from "./routers/auth.router.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/blogs", blogRouter);
app.use("/api/:blogId/comments", commentRouter);
app.use("/api/blogs/likes", blogLikeRouter);
app.use("/api/comments/likes", commentLikeRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
