import React from 'react';
import './Dropdown.scss';

function Dropdown({ options, value, onChange, label, id }) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        Select a {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
