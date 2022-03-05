import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import Questions from '../Helpers/questionBank'

const EndScreen = () => {

    const { score, setScore, setGameState } = useContext(QuizContext)

    const restart = () => {
        setScore(0)
        setGameState('menu')
    }

    return (
        <div className="EndScreen Menu">
            <h1>Quiz Finished</h1>
            <h3> {score} / {Questions.length} </h3>
            <button onClick={restart} className="restart"> Restart Quiz </button>
        </div>
    )

}

export default EndScreen