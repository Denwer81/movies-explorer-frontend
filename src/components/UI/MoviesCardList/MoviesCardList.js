import React from "react";
import NoResult from '../../UI/NoResult/NoResult'
import MovieCard from '../MovieCard/MovieCard';
import { useRenderCount } from "../../../hooks/useRenderCount";
import './MoviesCardList.css';

function MoviesCardList({ searchResult, errorMessage }) {
  const { count, handleOpenMore } = useRenderCount();
  const movies = searchResult.result || []
  
  return (
    <>
      {movies.length > 0 || <NoResult errorMessage={errorMessage} searchText={ searchResult.text } />}
      <ul className='card-list'>
        { movies.slice(0, count).map(movie => {
            return <MovieCard key={movie.movieId} movie={movie} />
          })
        }
      </ul>
      <button
        className={`card-list__button card-list__button_${movies.length <= count && 'hidden'}`}
        type='button'
        onClick={handleOpenMore}>
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;