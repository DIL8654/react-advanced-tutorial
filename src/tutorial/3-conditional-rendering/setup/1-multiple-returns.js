import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return "loading..";
  }
  // first return everything else will be ignored
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
