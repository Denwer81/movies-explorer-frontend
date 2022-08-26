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
import ProtectedRoutes from '../UI/ProtectedRoutes/ProtectedRoutes';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const {
    isLoggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetProfile,
    handleEditProfile,
    checkToken,
    errorMessage,
    isLoading,
  } = useAuth()

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetProfile(setCurrentUser)
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Routes>
          <Route path="/"
            element={<Main isLoggedIn={isLoggedIn} />
            } />
          <Route path="/sign-up"
            element={
              <Register
                handleRegister={handleRegister}
                errorMessage={errorMessage}
                isLoading={isLoading} />
            } />
          <Route path="/sign-in"
            element={
              <Login
                handleLogin={handleLogin}
                errorMessage={errorMessage}
                isLoading={isLoading} />
            } />
          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="/profile"
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                  handleEditProfile={handleEditProfile}
                  setCurrentUser={setCurrentUser}
                  errorMessage={errorMessage}
                  isLoading={isLoading} />
              } />
            <Route path="/movies"
              element={<Movies isLoggedIn={isLoggedIn} />
              } />
            <Route path="/saved-movies"
              element={<SavedMovies isLoggedIn={isLoggedIn} />
              } />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
