import React from "react";
import { useState } from "react";

const App = () => {
  const [Value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(Value + 1);
    // console.log(Value);
  };
  const handleDecrease = () => {
    setValue(Value - 1);
    // console.log(Value);
  };
  return (
    <div>
      <h1>count:{Value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default App;
