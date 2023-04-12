import React, { useState } from "react";

function Choices({ onChoiceClick, selectedChoice, choices }) {
  const replaceCharacters = (text) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };

  return (
    <ul>
      {choices.map((choice, index) => (
        <li
          key={index}
          className="mixed-answers"
          onClick={() => onChoiceClick(choice)}
          style={{
            backgroundColor:
              choice === selectedChoice ? "lightblue" : "transparent",
          }}
        >
          {replaceCharacters(choice)}
        </li>
      ))}
    </ul>
  );
}

export default Choices;
