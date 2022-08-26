import { useState } from "react";
import { getMoviesDB, getMovies, addMovies, deleteMovies } from '../utils/MoviesApi'
import useSearch from "./useSearch";

function useMovie() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleSearch } =useSearch()

  function handleGetMoviesDB(text, isChecked) {
    setIsLoading(true);
    getMoviesDB()
      .then((movies => {
        handleSearch(movies, text, isChecked)
        // console.log(movies)
      }))
      .catch(error => {
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleGetMovies(token, text, isChecked) {
    setIsLoading(true);
    getMovies(token)
    .then((movies => {
      handleSearch(movies, text, isChecked)
      // console.log(movies)
    }))
    .catch(error => {
      setErrorMessage(error.message)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function handleAddMovies() {
    addMovies()
  }

  function handleDeleteMovies() {
    deleteMovies()
  }

  return {
    handleGetMoviesDB,
    handleGetMovies,
    handleAddMovies,
    handleDeleteMovies,
    errorMessage,
    isLoading,
  }
}

export default useMovie;