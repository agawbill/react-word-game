import React from "react";

const Key = props => {
  const color =
    props.status === "used"
      ? "red"
      : props.status === "correct"
        ? "green"
        : "white";

  const keyStyle = {
    display: "inline-block",
    backgroundColor: color,
    border: "1px solid black",
    margin: "10px",
    padding: "20px"
  };

  return (
    <div style={keyStyle} onClick={props.keyHandler}>
      {props.letter}
    </div>
  );
};

export default Key;
