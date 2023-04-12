import React from "react";
import { useEffect, useState } from "react";
import Choices from "./Choices";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  useEffect(() => {
    setShuffledQuestions(
      questions.map((question) => ({
        ...question,
        choices: shuffleAnswers([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }))
    );
  }, [questions]);

  const handleChoiceClick = (qIndex, choice) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [qIndex]: choice,
    }));

    if (choice === questions[qIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  function shuffleAnswers(answer) {
    return answer.sort(() => Math.random() - 0.5);
  }

  const replaceCharacters = (text) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };

  return (
    <div>
      {shuffledQuestions.map((q, i) => (
        <div key={i}>
          <h2 className="question">{replaceCharacters(q.question)}</h2>
          <Choices
            choices={q.choices}
            onChoiceClick={(choice) => handleChoiceClick(i, choice)}
            selectedChoice={selectedAnswers[i]}
          />
        </div>
      ))}

      {score !== 0 && (
        <p>
          You scored {score}/{questions.length} answers.
        </p>
      )}
    </div>
  );
}

export default Questions;
