import React from "react";

function Choices({
  onChoiceClick,
  selectedChoice,
  choices,
  showAnswers,
  correctAnswer,
}) {
  // const replaceCharacters = (text) => {
  //   return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  // };

  const decodeEntities = (text) => {
    const parser = new DOMParser();
    return parser.parseFromString(text, "text/html").body.textContent;
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
                ? "#94D7A2"
                : showAnswers && choice === selectedChoice
                ? "#F8BCBC"
                : choice === selectedChoice
                ? "#D6DBF5"
                : "transparent",
          }}
        >
          {decodeEntities(choice)}
        </li>
      ))}
    </ul>
  );
}

export default Choices;
