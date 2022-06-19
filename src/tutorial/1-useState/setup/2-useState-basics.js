import React, { useState } from "react";

const UseStateBasics = () => {
  let defaultTitle = "default title";

  const [title, setTitle] = useState(defaultTitle);
  const handleClick = () => {
    if (title === defaultTitle) {
      setTitle("Random Title");
    } else {
      setTitle(defaultTitle);
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        {" "}
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
