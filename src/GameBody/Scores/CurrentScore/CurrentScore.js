import React from "react";

const CurrentScore = props => {
  return (
    <div>
      <p>
        <b>My current score: </b>
        {props.currentScore}
      </p>
    </div>
  );
};

export default CurrentScore;
