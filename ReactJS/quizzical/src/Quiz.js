import React from "react";

function Quiz(props) {
  const handleClick = () => {
    props.onQuiz();
  };

  return (
    <div className="quiz-intro">
      <h2 className="quiz-header">Quizzical</h2>
      <h3>5 random questions, you better be ready!</h3>
      <button className="start-btn" onClick={handleClick}>
        Start quiz
      </button>
    </div>
  );
}

export default Quiz;
