import React, { useState } from "react";
import { topics } from "./suggestion";
import { WithContext as ReactTags } from "react-tag-input";

const TopicEditor = () => {
  const [tags, setTags] = useState([]);

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const className = {
    tags: "tagsClass  flex flex-col flex-wrap p-1.5 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500",
    tagInputField:
      "bg-gray-50 my-2 text-gray-900 text-sm rounded-lg border-b-2 border-x-2  focus:outline-none focus:ring-primary-600 focus:border-b-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
    selected:
      "selectedClass flex flex-wrap gap-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500",
    tag: "flex gap-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5  py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    remove:
      "removeClass dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500",
    suggestions:
      "suggestionsClass dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500",
  };

  const handleFilterSuggestions = (
    textInputValue,
    possibleSuggestionsArray
  ) => {
    const lowerCaseQuery = textInputValue.toLowerCase();
    const filteredSuggestions = possibleSuggestionsArray.filter(
      (suggestion) => {
        return suggestion.text.toLowerCase().includes(lowerCaseQuery);
      }
    );
    return filteredSuggestions;
  };

  return (
    <div className="">
      <ReactTags
        classNames={className}
        tags={tags}
        suggestions={topics}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        placeholder="Add Topic of Interest, Enter at least 5 topics"
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        handleFilterSuggestions={handleFilterSuggestions}
        allowUnique={true}
        maxTags={5}
        inputFieldPosition="bottom"
        autocomplete
        allowAdditionFromPaste
      />
    </div>
  );
};

export default TopicEditor;
