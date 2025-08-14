import React from "react";
import { useState, useCallback } from "react";
import Child from "./Child.jsx";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  console.log("App calling......");
  const Increment = () => {
    setCount(count + 1);
  };

  const Increment1 = () => {
    setCount1(count1 + 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const val = useCallback(Increment1, []);
  // const val = Increment1();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <br />
      <br />
      <h1>Count: {count1}</h1>
      <button onClick={Increment1}>Increment</button>
      <br />
      <br />

      <Child count1={count1} Increment1={val} />
    </>
  );
};

export default UseCallback;
