import "dotenv/config";
import express from "express";
import connectDB from "./config/connectDB.js";
import blogRouter from "./routers/blog.router.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
