import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';
import "./Welcome.css";

const Welcome = () => {
const quizState = useContext(QuizContext);

console.log(quizState);

  return (
    <div id='welcome'>
      <h2>seja bem vindo</h2>
      <p>Clique no botao a baixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="inicio do quiz" />
    </div>
  )
}

export default Welcome
