import React from "react";
import styles from "./StartGame.module.css";

const StartGame = props => {
  return (
    <div>
      <center>
        <button
          className={styles.startButton}
          onClick={() => {
            props.startHandler();
          }}
        >
          Start Game
        </button>
      </center>
    </div>
  );
};

export default StartGame;
