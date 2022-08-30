import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import './MovieCard.css'

function MovieCard({ movie, token, handleAddMovies, handleDeleteMovies }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  function handleClick() {
    if (location.pathname === '/movies') {
      handleAddMovies(token, movie)
    } else {
      console.log(token, movie._id)
      handleDeleteMovies(token, movie._id)
    }
    setIsSaved(!isSaved);
  }

  return (
    <div className="card">
      <div className="card__description">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{movie.duration} минут(a)</p>
      </div>
      <a className='card__link'
        href={movie.trailerLink}
        rel="noreferrer"
        target="_blank">
        <img className="card__image" src={movie.image} alt={`постер ${movie.nameRU}`}></img>
      </a>
      <button
        className={`card__button ${isSaved ? 'card__button_added' : ''}
          ${location.pathname !== '/movies' ? 'card__button_remove' : ''}`}
        type="button"
        onClick={handleClick}>
        {
          !isSaved && location.pathname === '/movies' ? 'Сохранить' : ''
        }
      </button>
    </div>
  );
}

export default MovieCard;
