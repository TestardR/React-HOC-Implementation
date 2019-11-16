import React from "react";
import withBorder from "./../HOC/withBorder";

function MyComponent({ style, ...rest }) {
  return (
    <div style={style} {...rest}>
      <h2>This is my component and I am expecting some styles.</h2>
    </div>
  );
}

export default withBorder(MyComponent, {
  border: "4px solid teal"
});
