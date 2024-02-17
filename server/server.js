import "dotenv/config";
import express from "express";
import connectDB from "./config/connectDB.js";
import blogRouter from "./routers/blog.router.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173/",
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
