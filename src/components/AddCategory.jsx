import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const changeInput = ({ target }) => {
    setInputValue(target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue.length < 1) return;

    onNewCategory(trimmedInputValue);

    setInputValue('');
  };

  return (
    <form action="" onSubmit={submit} aria-label="form">
      <input type="text" placeholder="Search Gifs" value={inputValue} onChange={changeInput} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
