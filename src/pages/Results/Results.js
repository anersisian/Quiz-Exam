import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import './Results.scss';

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions, userAnswers } = location.state;
  let score = 0;

  questions.forEach((q) => {
    if (userAnswers[q.question] === q.correct_answer) {
      score++;
    }
  });

  const getColorForScore = () => {
    if (score <= 1) return 'red';
    if (score <= 3) return 'yellow';
    return 'green';
  };

  const restartQuiz = () => {
    navigate('/');
  };

  return (
    <div className="results">
      <h3 className="results__title">Results</h3>
      <QuestionsList
        questions={questions}
        selectedAnswers={userAnswers}
        context="results"
      />

      <p
        className="results__score"
        style={{ backgroundColor: getColorForScore() }}
      >
        You scored {score} out of 5
      </p>
      <button className="results__create-btn" onClick={restartQuiz}>
        Create a new Quiz
      </button>
    </div>
  );
}

export default Results;
