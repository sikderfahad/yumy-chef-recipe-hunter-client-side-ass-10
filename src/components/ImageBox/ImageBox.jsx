import React, { useEffect, useState } from "react";
import { ToastMsgError, ToastMsgSuc } from "../Toast/ToastMsg";

const ImageBox = () => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(null);

  const checkURL = (event) => {
    event.preventDefault();
    const getUrl = event.target.photoUrl.value;
    setUrl(getUrl);
  };

  useEffect(() => {
    const checkLinkValidity = () => {
      const image = new Image();
      image.onload = () => setIsValid(true);
      image.onerror = () => setIsValid(false);
      image.src = url;
    };

    checkLinkValidity();
  }, [url]);

  if (isValid === null) {
    return <p>Checking link validity...</p>;
  }

  isValid
    ? ToastMsgSuc("The link is valid")
    : ToastMsgError("The link is invalid");

  return (
    <div>
      <h1>{isValid ? "The link is valid" : "The link is invalid"}</h1>
      <form onSubmit={checkURL} action="">
        <input name="photoUrl" type="text" />
        <button className="text-lg bg-red p-3 rounded">Check</button>
      </form>
    </div>
  );
};

export default ImageBox;
