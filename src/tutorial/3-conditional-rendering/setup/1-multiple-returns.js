import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  return "hello world";
  // first return everything else will be ignored
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
