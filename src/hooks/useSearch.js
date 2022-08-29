function useSearch() {

  function handleGlobalSearch(data, text, isChecked) {
    const movies = formatedData(data)

    return search(movies, text, isChecked)
  }

  function handleLocalSearch(movies, text, isChecked) {
    return search(movies, text, isChecked)
  }

  function search(movies, text, isChecked) {
    const searchText = text.toLowerCase();

    const filteredMovie = (movies) => {
      return movies.filter(movie => {
        const nameRu = movie.nameRU || 'нет названия';
        const nameEn = movie.nameEN || 'нет названия';

        if (nameEn.toLowerCase().includes(searchText) || nameRu.toLowerCase().includes(searchText)) {
          return true;
        }
        return false;
      })
    }

    return !isChecked
      ? filteredMovie(movies)
      : filteredMovie(movies).filter(movie => movie.duration <= 40)
  }

  const formatedData = (data) => {
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

  return {
    handleGlobalSearch,
    handleLocalSearch,
  }
}

export default useSearch;