import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";
import Welcome from "./components/Welcome";
import Questions from "./components/questions";

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>quiz de Programacao</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
