import { connect } from "mongoose";

async function main() {
  await connect(`${process.env.DB_ENDPOINT}`);
}

export default function connectDB() {
  main()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
}
