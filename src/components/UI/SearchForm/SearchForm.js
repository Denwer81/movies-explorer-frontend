import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [inputData, setinputData] = React.useState();
  const input = React.useRef(null);

  function handleInputData() {
    setinputData(input.current.validationMessage)
  }

  return (
    <form className='search' noValidate>
      <div className='search__container'>
        <input
          ref={input}
          onChange={handleInputData}
          className='search__input'
          type='search' name='search-film'
          placeholder='Фильм'
          required />
        <span className='search__error'>
          {inputData}
        </span>
        <button className='search__button' type='submit'>Найти</button>
      </div>
      <div className='search__checkbox-container'>
        <input className='search__checkbox' id='search__checkbox' type='checkbox' />
        <label className='search__label' htmlFor='search__checkbox'>Короткометражки</label>
      </div>
    </form>
  );
};

export default SearchForm;