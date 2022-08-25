import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/NotFound/NotFound';
import useAuth from '../../hooks/useAuth'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const { isLoggedIn, signIn, login, logout, getUser, errorMessage, isLoading } = useAuth()

  useEffect(() => {
      if (isLoggedIn) {
        getUser(setCurrentUser)
      }
    }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Routes>
          <Route path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          />
          <Route path="/sign-up"
            element={
              <Register
                signIn={signIn}
                errorMessage={errorMessage}
                isLoading={isLoading} />}
          />
          <Route path="/sign-in"
            element={
              <Login
                login={login}
                errorMessage={errorMessage}
                isLoading={isLoading} />}
          />
          <Route path="/profile"
            element={<Profile
              isLoggedIn={isLoggedIn}
              logout={logout}
              errorMessage={errorMessage}
              isLoading={isLoading} />}
          />
          <Route path="/movies"
            element={<Movies isLoggedIn={isLoggedIn} />}
          />
          <Route path="/saved-movies"
            element={<SavedMovies isLoggedIn={isLoggedIn} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
