import React, { useEffect, useState } from "react";
import CommonForm from "../CommonForm";
import useFetchAddBlog from "../../Hooks/useFetch/blogFetch/useFetchAddBlog";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/auth/useAuth";

const NewForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    imgUrl: "",
    postFormat: "editor",
  });
  const [post, setPost] = useState("");

  const { response, isLoading, error, createNewBlog } = useFetchAddBlog();
  const { authState } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: form.title,
      description: form.description,
      imgUrl: form.imgUrl,
      postFormat: form.postFormat,
      post: post,
      author: authState.id,
    };
    await createNewBlog(data);
  };

  useEffect(() => {
    if (response) {
      toast.success("New blog created successfully!", {
        autoClose: 2000,
      });
      navigate("/");
    }

    if (error) {
      toast.error("Failed to create new blog!", {
        autoClose: 2000,
      });
    }
  }, [response, error, isLoading]);

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
