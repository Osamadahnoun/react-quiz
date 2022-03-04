import React, {useState, useContext} from "react";
import Questions from "../Helpers/questionBank";
import { QuizContext } from "../Helpers/Contexts";


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');

    const { setScore, score, setGameState } = useContext(QuizContext)
 
    const nextQuestion = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1)
        alert(score)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
        }
        setGameState('endScreen')
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="answers">
                <button onClick={() => setOptionChosen('A')}>{Questions[currentQuestion].answerA}</button>
                <button onClick={() => setOptionChosen('B')}>{Questions[currentQuestion].answerB}</button>
                <button onClick={() => setOptionChosen('C')}>{Questions[currentQuestion].answerC}</button>
                <button onClick={() => setOptionChosen('D')}>{Questions[currentQuestion].answerD}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}> Next Question </button>
            )}
        </div>
    )
}

export default Quiz