import { useState } from "react";
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

  function handleAddMovies() {
    addMovies()
  }

  function handleDeleteMovies() {
    deleteMovies()
  }

  function handleSavedSearch(path, func, { result = [], text, isChecked }) {
    localStorage.setItem(path, JSON.stringify({ result, text, isChecked }));
    func({ result, text, isChecked })
  }

  return {
    handleGetMoviesGlobal,
    handleGetMoviesLocal,
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