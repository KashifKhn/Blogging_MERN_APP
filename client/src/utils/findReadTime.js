const countWord = (str) => {
  str = str.trim();
  const words = str.split(/\s+/);
  return words.length;
};

const findReadTime = (str) => {
  const wordCount = countWord(str);
  const readTime = Math.ceil(wordCount / 200);
  return readTime;
};

export default findReadTime;
