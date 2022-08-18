import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import PageNotFound from '../Pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<div>Войти</div>} />
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
