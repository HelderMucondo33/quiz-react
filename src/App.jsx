import "./App.css";
import Welcome from "./components/Welcome";

import Questions from "./components/Questions";

import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //embaralhar as questoes
    dispatch({type: "REORDER_QUESTIONS"})
  }, []);

  return (
    <div className="App">
      <h1>quiz de Programacao</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
