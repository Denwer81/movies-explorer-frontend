import { useState, useEffect } from "react";
import { getMovies, addMovies, deleteMovies, getMoviesDB } from '../utils/MoviesApi'
import { handleSearch } from "../utils/search";

function useMovie(token, isLoggedIn) {
  const [errorMovieMessage, setErrorMovieMessage] = useState('');
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [searchResultGlobal, setSearchResultGlobal] = useState({});
  const [searchResultLocal, setSearchResultLocal] = useState({});

  useEffect(() => {
    setSearchResultGlobal({
      searchText: '',
      shortMovie: false,
      movies: [],
    })

    if (token) {
      handleGetMovies(token)
    }
  }, [isLoggedIn]);


  // useEffect(() => {
  //   if (token) {
  //     handleGetMovies(token)
  //   }
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   setSearchResultGlobal({
  //     searchText: '',
  //     shortMovie: false,
  //     movies: [],
  //   })
  // }, [isLoggedIn])

  // useEffect(() => {
  //   if (localStorage.getItem('localMovie')) {
  //     setSearchResultLocal(JSON.parse(localStorage.getItem('localMovie')))
  //   }
  //   if (localStorage.getItem('globalSearchResult')) {
  //     setSearchResultGlobal(JSON.parse(localStorage.getItem('globalSearchResult')))
  //   }
  //   if (localStorage.getItem('localSearchResult')) {
  //     setSearchResultLocal(JSON.parse(localStorage.getItem('localSearchResult')))
  //   }
  // }, [])

  function handleGetMoviesGlobal(text, isChecked) {
    const MovieDB = JSON.parse(localStorage.getItem(('MovieDB')));

    if (MovieDB) {
      const result = handleSearch(MovieDB, text, isChecked)

      localStorage.setItem('MovieDB', JSON.stringify(MovieDB));
      handleSavedSearch('globalSearchResult', setSearchResultGlobal, { result, text, isChecked })
    } else {
      setIsLoadingMovie(true);
      getMoviesDB()
        .then((movies => {
          const result = handleSearch(movies, text, isChecked)

          localStorage.setItem('MovieDB', JSON.stringify(movies));
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
      .then(() => {
        handleGetMovies(token)
      })
      .catch(error => {
        setErrorMovieMessage(error.message)
      })
  }

  function handleDeleteMovies(token, movieId) {
    deleteMovies(token, movieId)
      .then(() => {
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
  }
}

export default useMovie;