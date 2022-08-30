import React from 'react';
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import SearchForm from '../../UI/SearchForm/SearchForm';
import MoviesCardList from '../../UI/MoviesCardList/MoviesCardList';
import Preloader from '../../UI/Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({
  isLoggedIn,
  token,
  handleGetMoviesLocal,
  handleDeleteMovies,
  searchResultLocal,
  errorMessage,
  isLoading,
}) {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          handleGetMoviesLocal={handleGetMoviesLocal}
          errorMessage={errorMessage}
          token={token}
          searchResult={searchResultLocal}
        />
        {isLoading
          ? <Preloader isLoading={isLoading} />
          : <MoviesCardList
            handleDeleteMovies={handleDeleteMovies}
            searchResult={searchResultLocal}
            errorMessage={errorMessage}
            token={token}
          />
        }
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;