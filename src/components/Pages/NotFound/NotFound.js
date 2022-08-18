import React, { useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className='not-found'>
        <h2 className='not-found__code'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__button' type='button' onClick={handleClick}>Назад</button>
    </div>
  );
}

export default NotFound;