import { useState, useEffect } from "react";
import { getMovies, addMovies, deleteMovies } from '../utils/MoviesApi'
import { handleSearch } from "../utils/search";
import { objDB } from "./obj";

function useMovie() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResultGlobal, setSearchResultGlobal] = useState({
    searchText: '',
    shortMovie: false,
    movies: [

    ],
  });
  const [searchResultLocal, setSearchResultLocal] = useState({
    searchText: '',
    shortMovie: false,
    movies: [],
  });

  useEffect(() => {
    handleGetMovies(token)
  }, [])

  useEffect(() => {
    console.log('юзЭффект сохранения')
    if (localStorage.getItem('localMovie')) {
      console.log('localMovie')
      setSearchResultLocal(JSON.parse(localStorage.getItem('localSearchResult')))
    }
    if (localStorage.getItem('globalSearchResult')) {
      console.log('globalSearchResult')
      setSearchResultGlobal(JSON.parse(localStorage.getItem('globalSearchResult')))
    }
    if (localStorage.getItem('localSearchResult')) {
      console.log('localSearchResult')
      setSearchResultLocal(JSON.parse(localStorage.getItem('localSearchResult')))
    }
  }, [])

  function handleGetMoviesGlobal(text, isChecked) {
    const result = handleSearch(objDB, text, isChecked)

    handleSavedSearch('globalSearchResult', setSearchResultGlobal, { result, text, isChecked })

    // localStorage.setItem('globalSearchResult', JSON.stringify({ result, text, isChecked }));
    // setSearchResultGlobal({ result, text, isChecked })

    // setIsLoading(true);
    // getMoviesDB()
    //   .then((movies => {
    //     handleGlobalSearch(movies, text, isChecked)
    //     // console.log(movies)
    //   }))
    //   .catch(error => {
    //     setErrorMessage(error.message)
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //   })
  }

  function handleGetMoviesLocal(token, text, isChecked) {
    console.log(token, text, isChecked)
    setIsLoading(true);
    getMovies(token)
    .then((movies => {
      const result = handleSearch(movies, text, isChecked)

        handleSavedSearch('localSearchResult', setSearchResultLocal, { result, text, isChecked })
      }))
      .catch(error => {
        setErrorMessage(error.message)
        handleSavedSearch('localSearchResult', setSearchResultLocal, { result: [], text, isChecked })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleGetMovies(token) {
    setIsLoading(true);
    getMovies(token)
      .then((movies => {
        console.log(movies)
        console.log('saved')
        handleSavedSearch('localMovie', setSearchResultLocal, { result: movies, text: '', isChecked: false})
      }))
      .catch(error => {
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleAddMovies(token, data) {
    addMovies(token, data)
      .then((movie => {
        console.log(movie)
        setErrorMessage(movie.nameRU)
      }))
      .catch(error => {
        console.log(error)
        setErrorMessage(error.message)
      })
  }

  function handleDeleteMovies(token, movieId) {
    deleteMovies(token, movieId)
      .then((movie => {
      console.log(movie)
      setErrorMessage(movie.nameRU)
    }))
    .catch(error => {
      console.log(error)
      setErrorMessage(error.message)
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
    errorMessage,
    isLoading,
    searchResultGlobal,
    setSearchResultGlobal,
    searchResultLocal,
    setSearchResultLocal,
  }
}

export default useMovie;