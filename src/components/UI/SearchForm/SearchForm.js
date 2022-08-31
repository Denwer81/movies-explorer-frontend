import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';

const SearchForm = ({ token, handleGetMoviesGlobal, handleGetMoviesLocal, searchResult }) => {
  const [errorMessage, setErrorMessage] = useState();
  const location = useLocation();
  const searchInput = useRef('');
  const searchCheckBox = useRef('');

  useEffect(() => {
    searchInput.current.value = searchResult.text || '';
    searchCheckBox.current.checked = searchResult.isChecked;
  }, [searchResult])

  function handleInputData() {
    setErrorMessage(searchInput.current.validationMessage)
  }

  function handleSubmitForm(evt) {
    const text = searchInput.current.value
    const isChecked = searchCheckBox.current.checked

    evt.preventDefault()

    if (text === '') {
      setErrorMessage('Нужно ввести ключевое слово')
    } else {
      if (location.pathname === '/movies') {
        handleGetMoviesGlobal(text, isChecked)
      } else {
        handleGetMoviesLocal(token, text, isChecked)
      }
    }
  }

  return (
    <form className='search' noValidate>
      <div className='search__container'>
        <input
          ref={searchInput}
          onChange={handleInputData}
          className='search__input'
          type='search' name='search-film'
          placeholder='Фильм'
          required />
        <span className='search__error'>
          {errorMessage}
        </span>
        <button
          className='search__button'
          type='submit'
          onClick={handleSubmitForm}>Найти</button>
      </div>
      <div className='search__checkbox-container'>
        <input
          ref={searchCheckBox}
          className='search__checkbox'
          id='search__checkbox'
          type='checkbox' />
        <label className='search__label' htmlFor='search__checkbox'>Короткометражки</label>
      </div>
    </form>
  );
};

export default SearchForm;