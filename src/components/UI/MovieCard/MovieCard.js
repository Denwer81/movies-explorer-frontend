import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import './MovieCard.css'

function MovieCard() {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const movieData =
  {
    "nameRU": "«Роллинг Стоунз» в изгнании",
    "duration": 61,
    "image": "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
  }

  function handleClick() {
    setIsSaved(!isSaved);
  }

  return (
    <div className="card">
      <div className="card__description">
        <h2 className="card__title">{movieData.nameRU}</h2>
        <p className="card__duration">{movieData.duration} минут(a)</p>
      </div>
      <img className="card__image" src={movieData.image} alt={`постер ${movieData.nameRU}`}></img>
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