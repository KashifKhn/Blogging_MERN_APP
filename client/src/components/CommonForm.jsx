import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Editor from "./Editor";

const CommonForm = ({
  form,
  handleChange,
  content,
  setContent,
  handleSubmit,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Form
      onSubmit={handleSubmit}
      validated={true}
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
};

export default CommonForm;
