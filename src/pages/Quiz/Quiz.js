import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizQuestions } from '../../api/triviaAPI';
import CategorySelector from '../../components/CategorySelector/CategorySelector';
import DifficultySelector from '../../components/DifficultySelector/DifficultySelector';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import './Quiz.scss';

function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedAnswers, setAnswers] = useState({});
  const isCreateEnabled = selectedCategory && selectedDifficulty;

  const loadQuestions = async () => {
    const questionsData = await fetchQuizQuestions(
      selectedCategory,
      selectedDifficulty
    );
    setQuestions(questionsData);
  };

  const handleAnswerClicked = (question, selectedAnswers) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedAnswers,
    }));
  };

  const submitQuiz = () => {
    navigate('/results', {
      state: { questions, userAnswers: selectedAnswers },
    });
  };

  return (
    <div className="quiz">
      <h3 className="quiz__title">Quiz Maker</h3>
      <div className="quiz__selection">
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <DifficultySelector
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <button
          id="createBtn"
          className={`quiz__create-btn ${
            isCreateEnabled ? 'quiz__create-btn-enabled' : ''
          }`}
          onClick={loadQuestions}
          disabled={!isCreateEnabled}
        >
          Create
        </button>
      </div>
      {questions && questions.length > 0 && (
        <div className="quiz__questions">
          <QuestionsList
            questions={questions}
            selectedAnswers={selectedAnswers}
            handleAnswerClicked={handleAnswerClicked}
            context="quiz"
          />
          {Object.keys(selectedAnswers).length === 5 && (
            <button className="quiz__submit-btn" onClick={submitQuiz}>
              submit
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
