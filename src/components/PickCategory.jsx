import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./PickCategory.css"

import Category from "../img/category.svg"

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch({type: "START_GAME", payload: category})
        dispatch({type: "REORDER QUESTIONS"})
    }
    
  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        <div>
        {quizState.questions.map((question) => {
            return <button key={question.category} onClick={() => chooseCategoryAndReorderQuestions(question.category)}>{question.category}</button>
        })}
        </div>
        <img src={Category} alt="Categorias" />
    </div>
  )
}

export default PickCategory