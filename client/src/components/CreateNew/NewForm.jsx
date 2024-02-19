import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Editor from "../Editor";
import useFetchAddBlog from "../../Hooks/useFetchAddBlog";

function NewForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  const { handleSubmit } = useFetchAddBlog({...form, content});

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log({...form, content});

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
    <Form
      onSubmit={handleSubmit}
      validated={true}
      noValidate
      className="needs-validation"
    >
      <Form.Group
        className="mb-3"
        controlId="title"
      >
        <Form.Label>Title</Form.Label>
        <Form.Control
          ref={inputRef}
          type="text"
          name="title"
          placeholder="Title.."
          onChange={handleChange}
          required={true}
          value={form.title}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="description"
      >
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          placeholder="Catchy Line for Your Idea"
          onChange={handleChange}
          required
          value={form.description}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="title"
      >
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          type="Url"
          name="imgUrl"
          placeholder="Image for Content"
          onChange={handleChange}
          required
          value={form.imgUrl}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="content"
      >
        <Editor
          value={content}
          handleChange={setContent}
        />
      </Form.Group>
      <button
        type="submit"
        className="btn btn-primary bg-blue-700"
      >
        Share New Idea
      </button>
    </Form>
  );
}

export default NewForm;
