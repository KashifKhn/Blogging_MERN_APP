import "dotenv/config";
import express from "express";
import connectDB from "./config/connectDB.js";
import blogRouter from "./routers/blog.router.js";
import cors from "cors";
import corsOptions from "./config/corsOption.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/blogs", blogRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
