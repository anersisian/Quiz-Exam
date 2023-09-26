import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { decodeHTMLEntities } from '../../utils/decodeHTML';
import { getButtonClasses } from '../../utils/getButtonClasses';
import { shuffleArray } from '../../utils/shuffleArray';
import './QuestionsList.scss';

function QuestionsList({
  questions,
  handleAnswerClicked,
  selectedAnswers,
  context = 'quiz',
}) {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const newShuffledQuestions = questions.map((q) => {
      return {
        ...q,
        answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      };
    });
    setShuffledQuestions(newShuffledQuestions);
  }, [questions]);

  return (
    <ul className="questions">
      {shuffledQuestions.map((q) => (
        <li key={uuidv4()}>
          <p>{decodeHTMLEntities(q.question)}</p>
          <div className="questions__answers">
            {q.answers.map((answer) => (
              <button
                className={getButtonClasses(
                  q,
                  answer,
                  selectedAnswers,
                  context
                )}
                key={uuidv4()}
                onClick={
                  context === 'quiz'
                    ? () => handleAnswerClicked(q.question, answer)
                    : null
                }
                disabled={context === 'results'}
              >
                {decodeHTMLEntities(answer)}
              </button>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default QuestionsList;
