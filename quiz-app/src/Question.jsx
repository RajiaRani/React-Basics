import React from 'react';
export default function Question({ question, options, onAnswer }) {
    return (
        <div>
            <h3>Chemistry Quiz</h3>
            <p>Time : 30 min</p>
            <p>Marks : 50</p>
            <div>
                <h5>{question}</h5>
                {options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
