import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/triviaAPI';
import Dropdown from '../Dropdown/Dropdown';

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };

    loadCategories();
  }, []);

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <Dropdown
      options={categoryOptions}
      value={selectedCategory}
      onChange={setSelectedCategory}
      label="Category"
      id="categorySelect"
    />
  );
}

export default CategorySelector;
