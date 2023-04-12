import React, { useState } from "react";

function Choices({
  onChoiceClick,
  selectedChoice,
  choices,
  showAnswers,
  correctAnswer,
}) {
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
              showAnswers && choice === correctAnswer
                ? "rgba(0, 255, 0, 0.5)"
                : showAnswers && choice === selectedChoice
                ? "rgba(255, 0, 0, 0.5)"
                : choice === selectedChoice
                ? "rgba(0, 0, 255, 0.5)"
                : "transparent",
          }}
        >
          {replaceCharacters(choice)}
        </li>
      ))}
    </ul>
  );
}

export default Choices;
