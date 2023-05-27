import React from "react";
import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ blog }) => {
  const { title, body } = blog;
  return (
    <div className="rounded-lg p-6 bg-[#F4F4F4] blog-item ">
      <p className="text-2xl flex items-center">
        <FontAwesomeIcon
          className="mr-5 text-[#7e90fe]"
          icon={faQuestionCircle}
        ></FontAwesomeIcon>
        <span className="font-bold">{title}</span>
      </p>
      <p className="mt-4 text-[#757575] font-semibold">{body}</p>
    </div>
  );
};

export default BlogItem;
