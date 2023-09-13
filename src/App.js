import React from 'react';
import { TriviaProvider } from './providers/TriviaProvider';
import TriviaComponent from './components/Trivia/index';

function App() {
  return (
    <TriviaProvider>
      <TriviaComponent />
    </TriviaProvider>
  );
}

export default App;
