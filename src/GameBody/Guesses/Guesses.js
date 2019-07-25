import React from "react";
import Guess from "./Guess/Guess";

const Guesses = props => {
  const guessStyle = {
    marginTop: "20px",
    textAlign: "center"
  };
  const guessBox = {
    borderBottom: "1px solid black",
    height: "25px",
    width: "30%",
    margin: "0 auto",
    marginBottom: "20px"
  };
  const wrongGuesses = props.wrongGuess.map((letter, index) => {
    return <Guess key={index} letter={letter} />;
  });

  const counter = 7 - props.wrongGuess.length;

  return (
    <div style={guessStyle}>
      <h3>Wrong Guesses:</h3>
      <p style={guessBox}>{wrongGuesses}</p>
      {counter} guesses left
    </div>
  );
};

export default Guesses;
