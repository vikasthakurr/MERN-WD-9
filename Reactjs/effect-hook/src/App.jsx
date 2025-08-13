import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  // console.log("weather API has been called again");
  const [count, setCount] = useState(0);
  let value = 0;

  const handleIncrement = () => {
    setCount(count + 1);
    value = value + 1;
    console.log(value);
  };
  // use effect generally use to perform side effect like unrelevent api call or rendering...
  // and it can also return a function to clean up the side effect that is called cleanup function
  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, [count]);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>count is: {count}</h1>
      {/* <p>value is :{value}</p> */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
