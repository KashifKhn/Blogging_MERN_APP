import ReactQuill from "react-quill";

const Editor = ({ value, handleChange }) => {

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "formula"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  
  return (
    <div className="min-h-[450px] max-md:min-h-[500px] max-sm:min-h-[550px]">
      <ReactQuill
        modules={{ toolbar: toolbarOptions }}
        theme="snow"
        value={value}
        onChange={handleChange}
        className="h-96 dark:text-white"
      />
    </div>
  );
};

export default Editor;
