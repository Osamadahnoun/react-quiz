import React, {useState} from "react";
import Questions from "../Helpers/questionBank";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');

    // const nextQuestion = () =>

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="answers">
                <button onClick={() => setOptionChosen('A')}>{Questions[currentQuestion].answerA}</button>
                <button onClick={() => setOptionChosen('B')}>{Questions[currentQuestion].answerB}</button>
                <button onClick={() => setOptionChosen('C')}>{Questions[currentQuestion].answerC}</button>
                <button onClick={() => setOptionChosen('D')}>{Questions[currentQuestion].answerD}</button>
            </div>
            <button> Next Question </button>
        </div>
    )
}

export default Quiz