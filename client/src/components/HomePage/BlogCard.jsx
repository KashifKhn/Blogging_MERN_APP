import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Card className="w-full">
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.description}</Card.Text>
        <div>
          <Link to={`/${blog._id}`} className="btn btn-primary mt-4">
            Read More &rarr;
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
