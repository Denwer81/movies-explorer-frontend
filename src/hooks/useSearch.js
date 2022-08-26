import { useState } from "react";

function useSearch() {
  const [movieDB, setMovieDB] = useState();
  const [searchResult, setSearchResult] = useState({
    searchText: '',
    shortMovie: false,
    movies: {},
  });

  function handleSearch(data, text, isChecked) {
    const movies = formatedData(data)

    setMovieDB(movies)
    localStorage.setItem('movieDB', JSON.stringify(movies));
    search(movies, text, isChecked)
    console.log(movies)
  }

  function search(movies, text, isChecked) {
    const searchText = text.toLowerCase();

    // console.log(movies.filter((movie => (movie.nameEN || 'нет названия').toLowerCase().includes(searchText) || (movie.nameRU || 'нет названия').toLowerCase().includes(searchText))))
    console.log(movies.filter((movie => filteredSearch(movie))))

    movies.filter((movie => {
      isChecked
        ? (filteredSearch(movie) && movie.duration < 41)
        : filteredSearch(movie)
    }))

    // console.log(movies.filter((movie => {
    //   isChecked
    //     ? (filteredSearch(movie) && movie.duration < 41)
    //     : filteredSearch(movie)
    // })))
    // console.log(isChecked)
    // console.log(movies.filter(movie => filteredSearch(movie)))

    function filteredSearch(movie) {
      // if (isChecked) {

      // }
      const nameRu = movie.nameRU || 'нет названия';
      const nameEn = movie.nameEN || 'нет названия';
      if (nameEn.toLowerCase().includes(searchText) || nameRu.toLowerCase().includes(searchText)) {
        return true;
      }
      return false;
    }



    // if (isChecked) {
    //   return movies.filter((movie) => {
    //     (movie.nameRU.toLowerCase().includes(searchText) || movie.nameEU.toLowerCase().includes(searchText))
    //       && movie.duration < 41
    //   })
    // }

    // return movies.filter((movie) => {
    //   (movie.nameRU.toLowerCase().includes(searchText) || movie.nameEU.toLowerCase().includes(searchText))
    // })

  // function search(movies, text, isChecked) {
    // let shortMovie = {};
    // const movieLength = 41;
    // console.log(isChecked)
    // console.log(movies.map(movie => Object.values(movie).map(str => str.toLowerCase())))
    // console.log(movies.map(movie => movie.nameRU.toLowerCase()))

    // movies.map(movie => {Object.values(movie).map((str) => str.includes(text))})
    // console.log(movies.map(movie => {Object.values(movie).map((str) => str.toLowerCase().includes(text.toLowerCase()))}))

    // console.log(movies.filter(movie => movie.duration < 41))
    // console.log(movies.filter(movie => Object.values(movie).includes(text)))
    // console.log(movies.filter(movie => console.log(Object.values(movie))))
  }

  function formatedData(data) {
    if (!data.movieId) {
      return data.map((item) => ({
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: `https://api.nomoreparties.co/${item.image.url}`,
        trailerLink: item.trailerLink,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        thumbnail: `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`,
        movieId: item.id,
      }));
    }
    return data;
  }

  return {
    handleSearch,
    movieDB,
    searchResult,
    setSearchResult
  }
}

export default useSearch;