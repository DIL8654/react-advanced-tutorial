import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decreseHandler = (value) => {
    setValue(value - 1);
  };

  const resetHandler = (value) => {
    setValue(0);
  };

  const increaseHandler = (value) => {
    setValue(value + 1);
  };
  const complexValueHandler = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4 rem 0" }}>
        <h2> complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => decreseHandler(value)}>
          {" "}
          decrease
        </button>
        <button className="btn" onClick={() => resetHandler(value)}>
          {" "}
          reset
        </button>
        <button className="btn" onClick={() => increaseHandler(value)}>
          {" "}
          increase
        </button>
      </section>
      <section style={{ margin: "4 rem 0" }}>
        <h2> complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => complexValueHandler(value)}>
          {" "}
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
