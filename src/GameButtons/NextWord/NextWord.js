import React from "react";

const NextWord = props => {
  console.log(styles);
  return (
    <div>
      <button className={props.styles.next} onClick={props.updateScore}>
        Next Word?
      </button>
    </div>
  );
};

export default NextWord;
