import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New messages(${value})`;
    }
  }, [value]); // blank array means only re-render in initial run and having value means ore-render when values in array changes

  //
  useEffect(() => {
    console.log("initial run");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>

      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        Click me{" "}
      </button>
    </>
  );
};

export default UseEffectBasics;
