import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import './MovieCard.css'

function MovieCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsSaved(!isSaved);
  }

  return (
    <div className="card">
      <div className="card__description">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{movie.duration} минут(a)</p>
      </div>
      <img className="card__image" src={movie.image} alt={`постер ${movie.nameRU}`}></img>
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
