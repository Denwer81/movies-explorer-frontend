import { useState } from "react";
import { getMovies, addMovies, deleteMovies } from '../utils/MoviesApi'
import useSearch from "./useSearch";
import { objDB } from "./obj";

function useMovie() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleGlobalSearch, handleLocalSearch } = useSearch();
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

  function handleGetMoviesGlobal(text, isChecked) {
    const result = handleGlobalSearch(objDB, text, isChecked)

    handlesavedSearch({ result, text, isChecked })

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
      const result = handleLocalSearch(movies, text, isChecked)

      handlesavedSearch({ result, text, isChecked })
    }))
      .catch(error => {
      const result = []
      setErrorMessage(error.message)
      handlesavedSearch({ result, text, isChecked })
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

  function handlesavedSearch({ result, text, isChecked }) {
    localStorage.setItem('localSearchResult', JSON.stringify({ result, text, isChecked }));
    setSearchResultLocal({ result, text, isChecked })
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
    searchResultLocal
  }
}

export default useMovie;