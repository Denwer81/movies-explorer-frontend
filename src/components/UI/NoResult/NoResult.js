import React from 'react';
import './NoResult.css';

function NoResult({ errorMessage, searchText }) {
  const message = errorMessage ? errorMessage : 'Ничего не найдено';

  return (
    <>
      {searchText || errorMessage ? <p className='no-result'>{`${message}`}</p> : ''}
    </>
  );
}

export default NoResult;