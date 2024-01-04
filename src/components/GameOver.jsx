import { useContext } from "react"

import { QuizContext } from "../context/quiz"

import Welldone from "../img/welldone.svg"
import "./Gameover.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='gameover'>
        <h2>Fim de jogo!</h2>
        <p>Você acertou {quizState.score} de {quizState.questions.length} questões.</p>
        <img src={Welldone} alt="Fim de jogo" />
        <button onClick={() => dispatch({type : "RETURN"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver