import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<div>Регистрация</div>} />
        <Route path="/sign-in" element={<div>Войти</div>} />
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
