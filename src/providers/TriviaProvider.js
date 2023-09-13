import React, { createContext, useContext, useState } from 'react';

const TriviaContext = createContext();

export const useTrivia = () => {
  return useContext(TriviaContext);
};

export const TriviaProvider = ({ children }) => {
    const [answers, setAnswers] = useState({});
  
    const handleSelection = (questionId, selection, isCorrect) => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: { selection, isCorrect }
      }));
    };
  
    const value = {
      answers,
      handleSelection
    };
  
    return <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>;
  };
  