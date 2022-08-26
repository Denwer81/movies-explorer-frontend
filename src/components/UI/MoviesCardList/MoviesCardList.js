import React, { useEffect, useState } from "react";
import NoResult from '../../UI/NoResult/NoResult'
import MoviesCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const [isAllCardsLoad, setisAllCardsLoad] = useState(false);

  useEffect(() => {
    setisAllCardsLoad(true)
  }, [])

  return (
    <>
      <NoResult />
      <ul className='card-list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
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