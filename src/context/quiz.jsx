import { createContext, useReducer } from "react";

import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  questionsLength:0
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = null;

      state.questions.map((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });
      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
        questionsLength: quizQuestions
      };

    case "REORDER_QUESTIONS":
      const randomQuest = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: randomQuest,
      };

    case "CHANGE_QUESTION":
      const netxPage = state.currentQuestion + 1;
      let finalStage = false;

      if (!state.questionsLength[netxPage]) {
        finalStage = true;
      }

      return {
        ...state,
        currentQuestion: netxPage,
        gameStage: finalStage ? STAGES[3] : state.gameStage,
      };

    case "RETURN":
      const randomQuest2 = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        gameStage: STAGES[0],
        questions: randomQuest2,
        currentQuestion: 0,
        answerSelected: false,
        score: 0,
      };

    case "CHECK_ANSWER":
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (state.answerSelected === answer) return state;

      if (option === answer) correctAnswer = 1;
      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
