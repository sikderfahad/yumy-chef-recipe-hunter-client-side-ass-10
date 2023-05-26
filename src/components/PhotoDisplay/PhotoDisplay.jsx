import React from "react";

const PhotoDisplay = ({ photoURL }) => {
  return (
    <div>
      <img src={photoURL} alt="" />
    </div>
  );
};

export default PhotoDisplay;
