import React from "react";

const Definitions = props => {
  const defStyle = {
    marginBottom: "20px"
  };
  const hints = props.answer.hint;

  const definitions = hints.map((definition, index) => {
    return <li key={index}>{definition}</li>;
  });

  return (
    <div style={defStyle}>
      <h2>Definitions</h2>
      <ul>{definitions}</ul>
    </div>
  );
};

export default Definitions;
