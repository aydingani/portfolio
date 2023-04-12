import React from "react";

const Check = ({ onCheckAnswers, onPlayAgain, score }) => {
  return score !== null ? (
    <button onClick={onPlayAgain} className="check-answers">
      Play Again
    </button>
  ) : (
    <button onClick={onCheckAnswers} className="check-answers">
      Check Answers
    </button>
  );
};

export default Check;
