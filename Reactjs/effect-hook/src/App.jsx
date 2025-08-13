import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  // console.log("weather API has been called again");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("component did mount");
  }, [count]);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>count is: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
