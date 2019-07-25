import React from "react";

const Letter = props => {
  let letter =
    props.rightGuess.indexOf(props.letter.toLowerCase()) !== -1 ||
    props.gameStatus === "over"
      ? props.letter
      : "*";

  let color =
    props.rightGuess.indexOf(props.letter.toLowerCase()) !== -1 ||
    props.gameStatus === "over"
      ? "black"
      : "white";

  const containerStyle = {
    display: "inline-block",
    color: color,
    backgroundColor: "white",
    borderBottom: "1px solid black",
    margin: "10px",
    padding: "20px"
  };

  return <div style={containerStyle}>{letter}</div>;
};

export default Letter;
