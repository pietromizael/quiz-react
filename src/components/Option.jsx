import { useContext } from "react";
import { useState } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.currentQuestion;
  const question = quizState.questions[currentQuestion];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (optionIndex, option) => {
    setSelectedOption(optionIndex);
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: question.answer, option },
    });
  };

  const handleClickDefault = () => {
    dispatch({ type: "CHANGE_QUESTION" });
    setSelectedOption(null);
  };

  const paragraphOptions = question.options.map((option, index) => (
    <p
      key={index}
      className={`options ${
        selectedOption === index && quizState.answerSelected === question.answer
          ? "selected"
          : ""
      } ${
        selectedOption !== index && quizState.answerSelected === question.answer
          ? "wrong disabled"
          : ""
      }
    ${!selectedOption === index && quizState.answerSelected !== question.answer
      ? "wrong disabled"
      : ""
  }`}
      onClick={() => handleClick(index, option)}
    >
      {option}
    </p>
  ));
  
  return (
    <div id="options-container">
      {paragraphOptions}
      {quizState.answerSelected && (
        <button onClick={handleClickDefault}>Continuar</button>
      )}
    </div>
  );
};

export default Option;
