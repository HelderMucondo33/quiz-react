import Quiz from '../img/quiz.svg';

const welcame = () => {
  return (
    <div id='welcame'>
      <h2>seja bem vindo</h2>
      <p>Clique no botao a baixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="inicio do quiz" />
    </div>
  )
}

export default welcame
