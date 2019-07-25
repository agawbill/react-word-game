import React from "react";
import styles from "./PlayAgain.module.css";

const PlayAgain = props => {
  let playAgainButton;

  if (props.status === "WINNER") {
    playAgainButton = (
      <center>
        <button
          className={styles.nextButton}
          onClick={() => props.startHandler()}
        >
          Next Word?
        </button>
      </center>
    );
  }
  if (props.status === "over") {
    playAgainButton = (
      <center>
        <button
          className={styles.againButton}
          onClick={() => props.startHandler()}
        >
          Sorry, try again?
        </button>
      </center>
    );
  }

  return <div>{playAgainButton}</div>;
};

export default PlayAgain;
