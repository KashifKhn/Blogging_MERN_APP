import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CommonForm from "../CommonForm";
import useFetchSingleBlog from "../../Hooks/useFetchSingleBlog";
import useFetchUpdateBlog from "../../Hooks/useFetchUpdateBlog";

const EditForm = () => {
  const { id } = useParams();
  const { blog, isLoading } = useFetchSingleBlog(id);

  const [form, setForm] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const [content, setContent] = useState("");
  const { handleUpdate } = useFetchUpdateBlog(id, { ...form, content });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (blog) {
      setForm({
        title: blog.title,
        description: blog.description,
        imgUrl: blog.imgUrl,
      });
      setContent(blog.content);
    }
  }, [blog]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <CommonForm
        handleChange={handleChange}
        form={form}
        content={content}
        setContent={setContent}
        handleSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditForm;
