
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


const Questions = () => {
    const { quizState, dispatch } = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]
  return (
    <div id='question'>
      <h1>Pergunta {quizState.currentQuestion +1} de {quizState.length}</h1>
      <h2>{currentQuestion.questions}</h2>
      <div id="options-container">
        <p>Opcoes</p>
      </div>
      <button>Continuar</button>
    </div>
  )
}

export default Questions
