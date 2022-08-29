import React, { useEffect } from 'react';
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import SearchForm from '../../UI/SearchForm/SearchForm';
import MoviesCardList from '../../UI/MoviesCardList/MoviesCardList';
import Preloader from '../../UI/Preloader/Preloader';
import useMovie from '../../../hooks/useMovies';
import './Movies.css';

function Movies({ isLoggedIn, token }) {
  const {
    handleGetMoviesGlobal,
    searchResultGlobal,
    setSearchResultGlobal,
    errorMessage,
    isLoading
  } = useMovie();
  const {
    text: searchText = '',
    result: movies = [],
    isChecked: durationIsChecked = false
  } = searchResultGlobal;

  useEffect(() => {
    if (localStorage.getItem('globalSearchResult')) {
      setSearchResultGlobal(JSON.parse(localStorage.getItem('globalSearchResult')))
    }
  }, [])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          handleGetMoviesGlobal={handleGetMoviesGlobal}
          errorMessage={errorMessage}
          token={token}
          searchText={searchText}
          durationIsChecked={durationIsChecked}
        />
        {isLoading
          ? <Preloader isLoading={isLoading} />
          : <MoviesCardList
            searchText={searchText}
            movies={movies}
            errorMessage={errorMessage}
          />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;