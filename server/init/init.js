import { connect } from "mongoose";
import { Blog } from "../models/blog.model.js";

async function main() {
  await connect(`mongodb://127.0.0.1:27017/mernblog`);
}

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

// Sample data
const sampleBlogs = [
  {
    title: "Sample Blog 1",
    description: "Description of Sample Blog 1",
    imgUrl: "https://example.com/image1.jpg",
    content: "Content of Sample Blog 1",
  },
  {
    title: "Sample Blog 2",
    description: "Description of Sample Blog 2",
    imgUrl: "https://example.com/image2.jpg",
    content: "Content of Sample Blog 2",
  },
  {
    title: "Sample Blog 3",
    description: "Description of Sample Blog 3",
    imgUrl: "https://example.com/image3.jpg",
    content: "Content of Sample Blog 3",
  },
  {
    title: "Sample Blog 4",
    description: "Description of Sample Blog 4",
    imgUrl: "https://example.com/image4.jpg",
    content: "Content of Sample Blog 4",
  },
  {
    title: "Sample Blog 5",
    description: "Description of Sample Blog 5",
    imgUrl: "https://example.com/image5.jpg",
    content: "Content of Sample Blog 5",
  },
  {
    title: "Sample Blog 6",
    description: "Description of Sample Blog 6",
    imgUrl: "https://example.com/image6.jpg",
    content: "Content of Sample Blog 6",
  },
  {
    title: "Sample Blog 7",
    description: "Description of Sample Blog 7",
    imgUrl: "https://example.com/image7.jpg",
    content: "Content of Sample Blog 7",
  },
  {
    title: "Sample Blog 8",
    description: "Description of Sample Blog 8",
    imgUrl: "https://example.com/image8.jpg",
    content: "Content of Sample Blog 8",
  },
  {
    title: "Sample Blog 9",
    description: "Description of Sample Blog 9",
    imgUrl: "https://example.com/image9.jpg",
    content: "Content of Sample Blog 9",
  },
  {
    title: "Sample Blog 10",
    description: "Description of Sample Blog 10",
    imgUrl: "https://example.com/image10.jpg",
    content: "Content of Sample Blog 10",
  },
];

const insertSampleData = async () => {
  try {
    await Blog.deleteMany({});
    await Blog.insertMany(sampleBlogs);
    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

// Call the function to insert sample data
insertSampleData();
