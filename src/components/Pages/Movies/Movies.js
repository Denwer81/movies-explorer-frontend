import React from 'react';
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import SearchForm from '../../UI/SearchForm/SearchForm';
import MoviesCardList from '../../UI/MoviesCardList/MoviesCardList';
// import Preloader from '../UI/Preloader/Preloader';
// import NoResult from '../UI/NoResult/NoResult'

import './Movies.css';

function Movies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm />
      {/* <Preloader /> */}
      {/* <NoResult /> */}
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;