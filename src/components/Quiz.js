import React, {useState, useContext} from "react";
import Questions from "../Helpers/questionBank";
import { QuizContext } from "../Helpers/Contexts";


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');

    const color1 = ({color:  "white", backgroundColor: "#ff9f9f"})
    const color2 = ({color:  "#ff9f9f", backgroundColor: "white"})
    const[colorA, setColorA] = useState(color1);
    const[colorB, setColorB] = useState(color1);
    const[colorC, setColorC] = useState(color1);
    const[colorD, setColorD] = useState(color1);

    const { setScore, score, setGameState } = useContext(QuizContext)
 
    const nextQuestion = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1)
        setColorA(color1)
        setColorB(color1)
        setColorC(color1)
        setColorD(color1)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
        }
        setGameState('endScreen')
    }


    const selectAnswerA = () => {
        setOptionChosen('A')
        setColorA(color2)
    }

    const selectAnswerB = () => {
        setOptionChosen('B')
        setColorB(color2)  
    }

    const selectAnswerC = () => {
        setOptionChosen('C')
        setColorC(color2)
    }

    const selectAnswerD = () => {
        setOptionChosen('D')
        setColorD(color2)
    }


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="answers">
                <button onClick={selectAnswerA} style={colorA} onBlur={() => setColorA(color1)}>{Questions[currentQuestion].answerA}</button>
                <button onClick={selectAnswerB} style={colorB} onBlur={() => setColorB(color1)}>{Questions[currentQuestion].answerB}</button>
                <button onClick={selectAnswerC} style={colorC} onBlur={() => setColorC(color1)}>{Questions[currentQuestion].answerC}</button>
                <button onClick={selectAnswerD} style={colorD} onBlur={() => setColorD(color1)}>{Questions[currentQuestion].answerD}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} className="nextBtn">Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion} className="nextBtn"> Next Question </button>
            )}
        </div>
    )
}

export default Quiz