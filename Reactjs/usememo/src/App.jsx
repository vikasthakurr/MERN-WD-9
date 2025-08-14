import React from "react";
import { useState, useMemo } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sum = () => {
    console.log("sum is called");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  };
  const res = useMemo(sum, []);
  return (
    <>
      <h1>{res}</h1>
      <h1>count is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <Child sum={res} />
      </div>
    </>
  );
};

export default App;
