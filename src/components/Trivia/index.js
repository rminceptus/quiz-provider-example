import React, { useState } from 'react';
import { useTrivia } from '../../providers/TriviaProvider';
import { sampleQuestions } from '../../utils/questions';

function TriviaComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { handleSelection, answers } = useTrivia();
  const question = sampleQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    const isCorrect = question.correctOption === option;
    handleSelection(question.id, option, isCorrect);
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Do something when the quiz is over
      console.log('Quiz finished!', answers);
    }
  }

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default TriviaComponent;
