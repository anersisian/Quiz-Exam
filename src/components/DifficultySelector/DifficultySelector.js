import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const difficultyOptions = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

function DifficultySelector({ selectedDifficulty, setSelectedDifficulty }) {
  return (
    <Dropdown
      options={difficultyOptions}
      value={selectedDifficulty}
      onChange={setSelectedDifficulty}
      label="Difficulty"
      id="difficultySelect"
    />
  );
}

export default DifficultySelector;
