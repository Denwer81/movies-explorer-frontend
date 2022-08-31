import { useState, useEffect } from "react";
import { getMovies, addMovies, deleteMovies, getMoviesDB } from '../utils/MoviesApi'
import { handleSearch } from "../utils/search";

function useMovie(token, isLoggedIn) {
  const [errorMovieMessage, setErrorMovieMessage] = useState('');
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [currentCardId, setCurrentCardId] = useState('')
  const [searchResultGlobal, setSearchResultGlobal] = useState({
    searchText: '',
    shortMovie: false,
    movies: [],
  });
  const [searchResultLocal, setSearchResultLocal] = useState({
    searchText: '',
    shortMovie: false,
    movies: [],
  });

  useEffect(() => {
    if (token) {
      handleGetMovies(token)
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setSearchResultGlobal({
      searchText: '',
      shortMovie: false,
      movies: [],
    })
  }, [])

  useEffect(() => {
    if (localStorage.getItem('localMovie')) {
      setSearchResultLocal(JSON.parse(localStorage.getItem('localMovie')))
    }
    if (localStorage.getItem('globalSearchResult')) {
      setSearchResultGlobal(JSON.parse(localStorage.getItem('globalSearchResult')))
    }
    if (localStorage.getItem('localSearchResult')) {
      setSearchResultLocal(JSON.parse(localStorage.getItem('localSearchResult')))
    }
  }, [])

  function handleGetMoviesGlobal(text, isChecked) {
    setIsLoadingMovie(true);
    getMoviesDB()
      .then((movies => {
        const result = handleSearch(movies, text, isChecked)

        handleSavedSearch('globalSearchResult', setSearchResultGlobal, { result, text, isChecked })
      }))
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
      .finally(() => {
        setIsLoadingMovie(false)
      })
  }

  function handleGetMoviesLocal(token, text, isChecked) {
    setIsLoadingMovie(true);
    getMovies(token)
      .then((movies => {
        const result = handleSearch(movies, text, isChecked)

        handleSavedSearch('localSearchResult', setSearchResultLocal, { result, text, isChecked })
      }))
      .catch(error => {
        setErrorMovieMessage(error.message)
        handleSavedSearch('localSearchResult', setSearchResultLocal, { result: [], text, isChecked })
      })
      .finally(() => {
        setIsLoadingMovie(false)
      })
  }

  function handleGetMovies(token) {
    getMovies(token)
      .then((movies => {
        handleSavedSearch('localMovie', setSearchResultLocal, { result: movies, text: '', isChecked: false })
      }))
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
  }

  function handleAddMovies(token, data) {
    addMovies(token, data)
      .then((movie => {
        setCurrentCardId(movie._id)
        handleGetMovies(token)
      }))
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
  }

  function handleDeleteMovies(token, movieId) {
    deleteMovies(token, movieId)
      .then(() => {
        setCurrentCardId('')
        handleGetMovies(token)
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
    handleGetMovies,
    handleAddMovies,
    handleDeleteMovies,
    errorMovieMessage,
    isLoadingMovie,
    searchResultGlobal,
    setSearchResultGlobal,
    searchResultLocal,
    setSearchResultLocal,
    setCurrentCardId,
    currentCardId,
  }
}

export default useMovie;