import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GameBody from "./GameBody/GameBody";
import GameButtons from "./GameButtons/GameButtons";

function App() {
  const [gameId, setGameId] = useState(0);

  const [status, setStatus] = useState("none");

  const [topScore, setTopScore] = useState(0);

  const [currentScore, setCurrentScore] = useState(0);

  const startHandler = () => {
    setStatus("active");
    setGameId(gameId + 1);
    if (status === "WINNER") {
      setCurrentScore(currentScore + 10);
    }
    if (status === "over" && currentScore > topScore) {
      setTopScore(currentScore);
      setCurrentScore(0);
    } else if (status === "over") {
      setCurrentScore(0);
    }
  };

  const updateStatus = gameStatus => {
    setStatus(gameStatus);
  };

  const cockpit =
    gameId > 0 && status !== "none" ? (
      <GameBody
        key={gameId}
        updateStatus={updateStatus}
        currentScore={currentScore}
        topScore={topScore}
      />
    ) : (
      <div>
        <p>Click the button above to start the game.</p>
        Here are the rules:
        <ul>
          <li>
            Words are randomly loaded from a random word list API, and then
            placed into the Meriam Dictionary API to give you definition hints.
          </li>
          <li>
            You have 15 seconds and 7 guesses to guess the randomly loaded word.
          </li>
          <li>
            If you guess correctly, 10pts will be added to your current score.
          </li>
          <li>
            If you make 7 incorrect guesses, or your 15 seconds runs out, the
            game is over. Your current score will be wiped clean and you will be
            forced to start fresh.
          </li>
          <li>
            If you choose to continue playing, your best current score will be
            logged as your "Top Score" for the duration of the browser session.
          </li>
          <li>
            Once you've clicked out of the browser, your current and top scores
            will be erased and you're starting from scratch.
          </li>
          <li>Have fun!</li>
        </ul>
      </div>
    );

  return (
    <div className="App">
      <center>
        <h1>Guess the Word!</h1>
      </center>
      <GameButtons
        gameId={gameId}
        startHandler={startHandler}
        status={status}
      />
      <p />
      {cockpit}
    </div>
  );
}

export default App;
