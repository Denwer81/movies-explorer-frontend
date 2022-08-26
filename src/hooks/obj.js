import React, { useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';

const SearchForm = ({ token, handleGetMoviesDB, handleGetMovies }) => {
  const [errorMessage, setErrorMessage] = useState();
  const location = useLocation();
  const searchText = useRef('');
  const searchCheckBox = useRef('');

  function handleInputData() {
    setErrorMessage(searchText.current.validationMessage)
  }

  function handleSubmitForm(evt) {
    const text = searchText.current.value
    const isChecked = searchCheckBox.current.checked

    evt.preventDefault()

    if (text === '') {
      setErrorMessage('Нужно ввести ключевое слово')
    } else {

    }


    if (location.pathname === '/movies') {
      handleGetMoviesDB(text, isChecked)
    } else {
      console.log(searchCheckBox.current.checked)
      console.log(searchText.current.value)
      handleGetMovies(token, text, isChecked)
    }
  }

  return (
    <form className='search' noValidate>
      <div className='search__container'>
        <input
          ref={searchText}
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