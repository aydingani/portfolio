import { useEffect, useState } from "react";
import "./main.css";
import Quiz from "./Quiz";
import Check from "./Check";
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
      <Check />
    </div>
  );
}

export default App;
