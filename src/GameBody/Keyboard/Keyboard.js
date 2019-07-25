import React from "react";
import Key from "./Key/Key";

const Keyboard = props => {
  const keyboardStyle = {
    float: "center"
  };
  const keys = "abcdefghijklmnopqrstuvwxyz";

  const keyStatus = letter => {
    if (props.wrongGuess.indexOf(letter) !== -1) {
      return "used";
    }
    if (props.rightGuess.indexOf(letter) !== -1) {
      return "correct";
    }
  };

  const keyBoard = keys.split("").map((letter, index) => {
    return (
      <Key
        status={keyStatus(letter)}
        keyHandler={() => {
          props.keyHandler(letter);
        }}
        key={index}
        letter={letter}
        style={keyboardStyle}
      />
    );
  });

  return <div>{keyBoard}</div>;
};

export default Keyboard;
