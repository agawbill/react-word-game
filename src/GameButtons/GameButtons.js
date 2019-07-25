import React from "react";
import StartGame from "./StartGame/StartGame";
import PlayAgain from "./PlayAgain/PlayAgain";

const GameButtons = props => {
  let gameButton =
    props.status === "WINNER" || props.status === "over" ? (
      <PlayAgain
        status={props.status}
        gameId={props.gameId}
        startHandler={props.startHandler}
      />
    ) : props.status === "none" ? (
      <StartGame startHandler={props.startHandler} />
    ) : null;

  return <div>{gameButton}</div>;
};

export default GameButtons;
