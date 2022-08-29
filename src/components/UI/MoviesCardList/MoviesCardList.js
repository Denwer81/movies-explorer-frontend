import React, { useEffect, useState } from "react";
import NoResult from '../../UI/NoResult/NoResult'
import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, errorMessage, searchText }) {
  const [isAllCardsLoad, setisAllCardsLoad] = useState(false);

  useEffect(() => {
    setisAllCardsLoad(true)
  }, [])

  return (
    <>
      {movies.length > 0 || <NoResult errorMessage={errorMessage} searchText={ searchText } />}
      <ul className='card-list'>
        { movies.map(movie => {
            return <MovieCard key={movie.movieId} movie={movie} />
          })
        }
      </ul>
      <button
        className={`card-list__button card-list__button_${!isAllCardsLoad && 'hidden'}`}
        type='button'>
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;