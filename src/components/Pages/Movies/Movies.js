import React from 'react';
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
    handleAddMovies,
    errorMessage,
    isLoading
  } = useMovie();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          handleGetMoviesGlobal={handleGetMoviesGlobal}
          errorMessage={errorMessage}
          token={token}
          searchResult={searchResultGlobal}
        />
        {isLoading
          ? <Preloader isLoading={isLoading} />
          : <MoviesCardList
            handleAddMovies={handleAddMovies}
            searchResult={searchResultGlobal}
            errorMessage={errorMessage}
            token={token}
          />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;