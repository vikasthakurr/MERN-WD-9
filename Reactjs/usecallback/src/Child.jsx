import React, { memo } from "react";

const Child = (props) => {
  console.log("Child component rendered......");
  return <div>Child calling......{props.count1}</div>;
};

export default memo(Child);
