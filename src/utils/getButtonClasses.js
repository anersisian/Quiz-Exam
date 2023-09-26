export const getButtonClasses = (q, answer, selectedAnswers, context) => {
  const isSelected = selectedAnswers[q.question] === answer;
  const isCorrectAnswer = answer === q.correct_answer;
  const isUserCorrect = isSelected && isCorrectAnswer;
  const isUserIncorrect = isSelected && !isCorrectAnswer;
  const isDisabled = context === 'results';

  return [
    'questions__answer',
    isSelected && 'questions__answer__selected',
    isDisabled &&
      (isUserCorrect
        ? 'questions__answer__correct'
        : isUserIncorrect
        ? 'questions__answer__incorrect'
        : isCorrectAnswer
        ? 'questions__answer__correct'
        : ''),
    isDisabled && 'questions__answer__disabled',
  ]
    .filter(Boolean)
    .join(' ');
};
