import React from 'react';
import Header from '../../UI/Header/Header';
import Footer from '../../UI/Footer/Footer';
import SearchForm from '../../UI/SearchForm/SearchForm';
import MoviesCardList from '../../UI/MoviesCardList/MoviesCardList';
import Preloader from '../../UI/Preloader/Preloader';
import useMovie from '../../../hooks/useMovies';
import './SavedMovies.css';

function SavedMovies({ isLoggedIn, token }) {
  const { handleGetMovies, errorMessage, isLoading } = useMovie();
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm handleGetMovies={handleGetMovies}
          errorMessage={errorMessage}
          token={token}
          />
         {isLoading
          ? <Preloader isLoading={isLoading} />
          : <MoviesCardList />
        }
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;