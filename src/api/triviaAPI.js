const BASE_URL = 'https://opentdb.com/';

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}api_category.php`);
  const data = await response.json();
  return data.trivia_categories;
};

export const fetchQuizQuestions = async (category, difficulty) => {
  const response = await fetch(
    `${BASE_URL}api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  const data = await response.json();
  return data.results;
};
