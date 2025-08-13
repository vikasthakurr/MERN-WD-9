import React from "react";

const Child = (props) => {
  const handleChange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input placeholder="enter your name" onChange={handleChange} />
      <h1>this is inside childName:{props.name}</h1>
    </div>
  );
};

export default Child;
