import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Editor from "./Editor";

const CommonForm = ({
  form,
  handleChange,
  post,
  setPost,
  handleSubmit,
  parentComp,
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
      <Form.Group className="mb-3">
        <Form.Label className="me-4">Format Type: </Form.Label>
        <Form.Check
          className="text-blue-700"
          inline
          type="radio"
          label="Editor"
          id="editor"
          name="postFormat"
          value="editor"
          checked={form.postFormat === "editor"}
          onChange={handleChange}
        />
        <Form.Check
          inline
          type="radio"
          label="Markdown"
          name="postFormat"
          id="markdown"
          value="markdown"
          checked={form.postFormat === "markdown"}
          onChange={handleChange}
        />
      </Form.Group>
      {form.postFormat === "editor" && (
        <Form.Group
          className="mb-3"
          controlId="post"
        >
          <Editor
            value={post}
            handleChange={setPost}
            required
          />
        </Form.Group>
      )}
      {form.postFormat === "markdown" && (
        <Form.Group
          className="mb-3"
          controlId="post"
        >
          <Form.Control
            as="textarea"
            rows={10}
            name="post"
            placeholder="Past Your Markdown Content Here"
            onChange={(e) => setPost(e.target.value)}
            required
            value={post}
          />
        </Form.Group>
      )}
      <button
        type="submit"
        className="btn btn-primary bg-blue-700"
      >
        {parentComp === "edit" ? "Update Ideas" : "Share Your Creative Ideas"}
      </button>
    </Form>
  );
};

export default CommonForm;
