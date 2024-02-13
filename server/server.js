import express from "express";
import { connect } from "mongoose";
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await connect(`${process.env.DB_ENDPOINT}`);
}

app.get("/", (req, res) => {
  res.send("Got a GET request");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
