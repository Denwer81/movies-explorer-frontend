export function handleSearch(data, text, isChecked) {
  const movies = formatedData(data)

  return search(movies, text, isChecked)
}

function search(movies, text, isChecked) {
  const searchText = text.toLowerCase();

  const filteredMovie = (movies) => {
    return movies.filter(movie => {
      const nameRu = movie.nameRU;
      const nameEn = movie.nameEN;

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

function formatedData(data) {
  if (!data[0]._id) {
    return data.map((item) => ({
      country: item.country || 'нет данных',
      director: item.director || 'нет данных',
      duration: item.duration || 0,
      year: item.year || 0,
      description: item.description || 'нет данных',
      image: `https://api.nomoreparties.co/${item.image.url}`,
      trailerLink: item.trailerLink,
      nameRU: item.nameRU || 'нет названия',
      nameEN: item.nameEN || 'нет названия',
      thumbnail: `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`,
      movieId: item.id,
    }));
  }
  return data;
}
