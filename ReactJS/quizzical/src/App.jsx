import { useEffect, useState } from "react";
import "./main.css";
import Quiz from "./Quiz";

function shuffleAnswers(answer) {
  return answer.sort(() => Math.random() - 0.5);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const replaceCharacters = (text) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  if (!showQuiz) {
    return <Quiz onQuiz={handleStartQuiz} />;
  }

  return (
    <div>
      {questions.map((q, i) => {
        const answers = shuffleAnswers([
          ...q.incorrect_answers,
          q.correct_answer,
        ]);
        return (
          <div key={i}>
            <h2>{replaceCharacters(q.question)}</h2>
            <ul>
              {answers.map((answer, i) => (
                <li key={i}>{replaceCharacters(answer)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
