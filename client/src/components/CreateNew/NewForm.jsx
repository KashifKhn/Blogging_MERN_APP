import React, { useState } from "react";
import CommonForm from "../CommonForm";
import useFetchAddBlog from "../../Hooks/useFetchAddBlog";

const NewForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imgUrl: "",
    postFormat: "editor",
  });
  const [post, setPost] = useState("");
  const { handleSubmit } = useFetchAddBlog({ ...form, post });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <CommonForm
        handleChange={handleChange}
        form={form}
        post={post}
        setPost={setPost}
        handleSubmit={handleSubmit}
        parentComp="new"
      />
    </div>
  );
};

export default NewForm;
