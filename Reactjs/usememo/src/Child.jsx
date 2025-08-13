import React from "react";

const Child = React.memo((props) => {
  console.log("child is rendered");
  return <div>count:{props.count}</div>;
});

export default Child;
