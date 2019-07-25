import React from "react";

const TopScore = props => {
  return (
    <div>
      <p>
        <b>My top score:</b> {props.topScore}
      </p>
    </div>
  );
};

export default TopScore;
