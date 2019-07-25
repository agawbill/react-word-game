import React from "react";

const Guess = props => {
  const guessStyle = {
    display: "inline-block",
    marginRight: "5px"
  };
  return <span style={guessStyle}>{props.letter}</span>;
};

export default Guess;
