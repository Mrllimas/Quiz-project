
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface Question {
  question: string;
  choices: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Paris', 'Berlin', 'Rome'],
    correctAnswer: 1,
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
    correctAnswer: 0,
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 0,
  },
  {
    question: 'Which country is home to the Great Barrier Reef?',
    choices: ['Australia', 'Brazil', 'Japan', 'Canada'],
    correctAnswer: 0,
  },
  {
    question: 'What is the largest ocean on Earth?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 0,
  },
];

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoiceSelect = (choiceIndex: number) => {
    setSelectedChoice(choiceIndex);
  };

  const handleNextQuestion = () => {
    if (selectedChoice === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedChoice(null);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleRestartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedChoice(null);
    setShowResult(false);
  };

  const handleGoToDashboard = () => {
    // Redirecionar para o dashboard aqui
    console.log('Ir para o dashboard');
  };

  const renderChoices = () => {
    return questions[currentQuestion].choices.map((choice, index) => (
      <li
        key={index}
        className={selectedChoice === index ? 'selected' : ''}
        onClick={() => handleChoiceSelect(index)}
      >
        {choice}
      </li>
    ));
  };

  const renderQuestion = () => {
    if (showResult) {
      return (
        <div>
          <h2>Game Over</h2>
          <p>
            You scored {score} de {questions.length} of!
          </p>
          <button onClick={handleRestartGame}>Play Again</button>
          <Link to="/Dashboard">
            <button>Return to Dashboard</button>
          </Link>
        </div>
      );
    }

    if (currentQuestion >= questions.length) {
      setShowResult(true);
      return null;
    }

    return (
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        <ul>{renderChoices()}</ul>
        <button onClick={handleNextQuestion} disabled={selectedChoice === null}>
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <div className="question-container">{renderQuestion()}</div>
    </div>
  );
};

export default App;

