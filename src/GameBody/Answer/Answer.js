import React from "react";
import Letter from "./Letter/Letter";

const Answer = props => {
  const answerStyle = {
    textAlign: "center",
    marginBottom: "20px"
  };
  const word = props.answer.word;

  const answer = word.split("").map((letter, index) => {
    return (
      <Letter
        letter={letter}
        key={index}
        gameStatus={props.gameStatus}
        rightGuess={props.rightGuess}
      />
    );
  });

  return <div style={answerStyle}>{answer}</div>;
};

export default Answer;
