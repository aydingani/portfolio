import { useEffect, useState } from "react";
import "./main.css";
import Quiz from "./Quiz";
import Questions from "./Questions";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  if (!showQuiz) {
    return <Quiz onQuiz={handleStartQuiz} />;
  }

  return (
    <div>
      <Questions />
    </div>
  );
}

export default App;
