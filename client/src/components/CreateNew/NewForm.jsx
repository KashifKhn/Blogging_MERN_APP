import React, { useState } from "react";
import CommonForm from "../CommonForm";
import useFetchAddBlog from "../../Hooks/useFetchAddBlog";

const NewForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const [content, setContent] = useState("");
  const { handleSubmit } = useFetchAddBlog({ ...form, content });

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
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewForm;
