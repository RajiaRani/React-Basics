import { useState } from "react";
import Question from "./Question";

export default function QuestionPaper() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "What is 40*4",
            options: ["30", "440", "105", "160"],
            answer: "160"
        },
        {
            question: "What is full form of NaCl",
            options: ["Sodium chorine", "Sodium Cholo", "Sodium Chloride"],
            answer: "Sodium Chloride"
        },
        {
            question :"Which of the following metals is present in the anode mud during the electrolytic refining of copper?",
           options: ["(a) Sodium", "(b) Aluminium ", "(c) Gold" ,"(d) Iron"],
           answer:"(d) Iron"
        },
        {
            question :"  An element reacts with oxygen to give a compound with a high melting point. The compound is soluble in water. The element is likely to be",
           options: ["(a) calcium ", " (b) carbon  ", "(c) iron" ,"(d) silicon"],
           answer:"(c) iron"
        },
        {
            question :" An alloy of Zn and Cu is dissolved in dil. HC1. Hydrogen gas is evolved. In this evolution of gas?",
           options: ["(a) only zinc reacts with dil. HC1", "(b)  only copper reacts with dil. HC1  ", "(c) both zinc and copper react with dil. HC1 " ,"(d) only copper reacts with water"],
           answer:"only copper reacts with water"
        }

    ];

    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuesIndex = currQuestionIndex + 1;
        if (nextQuesIndex < questions.length) {
            setCurrQuestionIndex(nextQuesIndex);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <h2>Your final score = {score}/{questions.length}</h2>
                </div>
            ) : (
                <Question  
                    question={questions[currQuestionIndex].question}
                    options={questions[currQuestionIndex].options}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    )
}
