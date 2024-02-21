import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Markdown from "react-markdown";

const purify = (html) => {
  const cleanHtml = DOMPurify.sanitize(html);
  console.log(cleanHtml);

  return cleanHtml;
};

const convertHtml = (html) => {
  return parse(purify(html));
};

const convertMarkdown = (markdown) => {
  return <Markdown>{markdown}</Markdown>;
};

export { convertHtml, convertMarkdown };
