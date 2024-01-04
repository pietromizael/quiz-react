// React - Componentes - Estáticos
import { useContext } from "react";

import quiz from "../img/quiz.svg";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Welcome = () => {
  const [ quizState, dispatch ] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para iniciar o Quiz</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={quiz} alt="Inicio do questionário" />
    </div>
  );
};

export default Welcome;
