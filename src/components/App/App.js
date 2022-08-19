import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/NotFound/NotFound';
import useLogin from '../../hooks/useLogin'

import './App.css';

function App() {
  const { isLoggedIn, login, logout } = useLogin()

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login login={login} />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} logout={logout} />} />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
