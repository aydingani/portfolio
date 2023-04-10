import React from "react";

function Quiz(props) {
  const handleClick = () => {
    props.onQuiz();
  };

  return (
    <div>
      <h2>Quizzical</h2>
      <h3>5 random questions, you better be ready!</h3>
      <button onClick={handleClick}>Start quiz</button>
    </div>
  );
}

export default Quiz;
