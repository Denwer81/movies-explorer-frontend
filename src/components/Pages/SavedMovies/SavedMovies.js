import React, { useEffect } from 'react';
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import SearchForm from '../../UI/SearchForm/SearchForm';
import MoviesCardList from '../../UI/MoviesCardList/MoviesCardList';
import Preloader from '../../UI/Preloader/Preloader';
import useMovie from '../../../hooks/useMovies';
import './SavedMovies.css';

function SavedMovies({ isLoggedIn, token }) {
  const {
    handleGetMoviesLocal,
    searchResultLocal,
    setSearchResultLocal,
    errorMessage,
    isLoading
  } = useMovie();
  const {
    text: searchText = '',
    result: movies = [],
    isChecked: durationIsChecked = false
  } = searchResultLocal;

  useEffect(() => {
    if (localStorage.getItem('localSearchResult')) {
      setSearchResultLocal(JSON.parse(localStorage.getItem('localSearchResult')))
    }
  }, [])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          handleGetMoviesLocal={handleGetMoviesLocal}
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

export default SavedMovies;