import React from 'react';

import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='search'>
      <div className='search__container'>
        <input className='search__input' type='search' name='search-film' placeholder='Фильм' required />
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