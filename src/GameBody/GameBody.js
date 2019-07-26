import React, { useEffect, useState } from "react";
import keys from "../config/keys";
import Answer from "./Answer/Answer";
import Definitions from "./Definitions/Definitions";
import Guesses from "./Guesses/Guesses";
import Keyboard from "./Keyboard/Keyboard";
import CurrentScore from "./Scores/CurrentScore/CurrentScore";
import TopScore from "./Scores/TopScore/TopScore";

const GameBody = props => {
  const [wrongGuess, setWrongGuess] = useState([]);

  const [rightGuess, setRightGuess] = useState([]);

  const [timer, setTimer] = useState("loading...");

  const [answer, setAnswer] = useState({
    word: "loading...",
    hint: ["loading..."]
  });

  const gameStatus =
    rightGuess.length === [...new Set(answer.word.toLowerCase())].length
      ? "WINNER"
      : wrongGuess.length === 7 || timer === 0
        ? "over"
        : "active";

  if (gameStatus === "WINNER" || "over") {
    props.updateStatus(gameStatus);
  }

  useEffect(() => {
    const fetchData = async () => {
      const wordHeaders = {
        method: "GET"
      };

      console.log(keys.apiKeys.prod);

      const wordData = await fetch(
        `https://random-word-api.herokuapp.com/word?key=${
          keys.apiKeys.words
        }&number=1`,
        wordHeaders
      );

      const wordResponse = await wordData.json();

      let randomWord = wordResponse[0];

      const defHeaders = {
        method: "GET"
      };

      const defData = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=${
          keys.apiKeys.dictionary
        }`,
        defHeaders
      );

      const defResponse = await defData.json();

      let definitions = defResponse[0].shortdef;

      if (randomWord === undefined || definitions === undefined) {
        fetchData();
      } else {
        return [
          setAnswer({ word: randomWord, hint: definitions }),
          setTimer(15)
        ];
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const counter = () => {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    };
    if (gameStatus === "active" && timer > 0) {
      counter();
    }
    return () => clearTimeout(counter);
  });

  const keyHandler = letter => {
    let word = answer.word.toLowerCase();

    if (gameStatus === "over" || gameStatus === "WINNER") {
      return;
    }

    if (
      wrongGuess.indexOf(letter) !== -1 ||
      rightGuess.indexOf(letter) !== -1
    ) {
      return;
    }

    if (word.indexOf(letter) !== -1 && word.length) {
      setRightGuess([...rightGuess, letter]);
    } else {
      setWrongGuess([...wrongGuess, letter]);
    }
  };

  return (
    <div>
      <TopScore topScore={props.topScore} />
      <CurrentScore currentScore={props.currentScore} />
      <Answer answer={answer} gameStatus={gameStatus} rightGuess={rightGuess} />
      <Definitions answer={answer} />
      <Guesses wrongGuess={wrongGuess} />
      <center>
        <p>{timer} seconds left</p>
      </center>
      <Keyboard
        wrongGuess={wrongGuess}
        rightGuess={rightGuess}
        answer={answer}
        keyHandler={keyHandler}
      />
    </div>
  );
};

export default GameBody;
