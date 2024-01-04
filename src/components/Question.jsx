import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useState } from "react";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  
  const currentQuestion = quizState.currentQuestion;
  const questionTitle = quizState.questions[currentQuestion].question;

  return (
    <div id="question">
      {
        <p>
          Pergunta {currentQuestion + 1} de {quizState.questions.length}
        </p>
      }
      {<h2>{questionTitle}</h2>}
      {<Option/>}
    </div>
  );
};

export default Question;
