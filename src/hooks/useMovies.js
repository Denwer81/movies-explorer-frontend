import { useState, useEffect } from "react";
import { getMovies, addMovies, deleteMovies, getMoviesDB } from '../utils/MoviesApi'
import { handleSearch } from "../utils/search";

function useMovie(token, isLoggedIn) {
  const [errorMovieMessage, setErrorMovieMessage] = useState('');
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [searchResultGlobal, setSearchResultGlobal] = useState({});
  const [searchResultLocal, setSearchResultLocal] = useState({});

  useEffect(() => {
    if (token) {
      handleGetMoviesLocalDB(token)
    }
  }, [isLoggedIn]);


  function handleGetMoviesGlobal(text, isChecked) {
    const movieDB = JSON.parse(localStorage.getItem(('MoviesDB')));

    if (movieDB) {
      const result = handleSearch(movieDB, text, isChecked)

      handleSavedSearch('globalSearchResult', setSearchResultGlobal, { result, text, isChecked })
    } else {
      setIsLoadingMovie(true);
      getMoviesDB()
        .then((movies => {
          const result = handleSearch(movies, text, isChecked)

          localStorage.setItem('MoviesDB', JSON.stringify(movies));
          handleSavedSearch('globalSearchResult', setSearchResultGlobal, { result, text, isChecked })
        }))
        .catch(error => {
          setErrorMovieMessage(error.message)
        })
        .finally(() => {
          setIsLoadingMovie(false)
        })
    }
  }

  function handleGetMoviesLocal(text, isChecked) {
    const LocalMoviesDB = JSON.parse(localStorage.getItem(('localMoviesDB'))).result;
    const result = handleSearch(LocalMoviesDB, text, isChecked)

    handleSavedSearch('localSearchResult', setSearchResultLocal, { result, text, isChecked })
  }

  function handleGetMoviesLocalDB(token) {
    getMovies(token)
      .then((movies => {
        handleSavedSearch('localMoviesDB', setSearchResultLocal, { result: movies, text: '', isChecked: false })
      }))
      .catch(error => {
        handleSavedSearch('localMoviesDB', setSearchResultLocal, { result: [], text: '', isChecked: false })
        setErrorMovieMessage(error.message)
      })
  }

  function handleAddMovies(token, data) {
    addMovies(token, data)
      .then(() => {
        handleGetMoviesLocalDB(token)
      })
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
  }

  function handleDeleteMovies(token, movieId) {
    deleteMovies(token, movieId)
      .then(() => {
        handleGetMoviesLocalDB(token)
      })
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
  }

  function handleSavedSearch(path, func, { result, text, isChecked }) {
    localStorage.setItem(path, JSON.stringify({ result, text, isChecked }));
    func({ result, text, isChecked })
  }

  return {
    handleGetMoviesGlobal,
    handleGetMoviesLocal,
    handleAddMovies,
    handleDeleteMovies,
    errorMovieMessage,
    isLoadingMovie,
    searchResultGlobal,
    setSearchResultGlobal,
    searchResultLocal,
    setSearchResultLocal,
  }
}

export default useMovie;