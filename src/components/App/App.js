import React from 'react';
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
import useMovie from '../../hooks/useMovies';
import './App.css';

function App() {
  const {
    isLoggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleEditProfile,
    errorMessage,
    isLoading,
    token,
    currentUser,
    setCurrentUser
  } = useAuth()

  const {
    handleGetMoviesLocal,
    handleGetMoviesGlobal,
    searchResultLocal,
    searchResultGlobal,
    handleDeleteMovies,
    handleAddMovies,
    errorMovieMessage,
    isLoadingMovie,
    setCurrentCardId,
    currentCardId,
  } = useMovie(token, isLoggedIn);

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
              element={<Movies
                isLoggedIn={isLoggedIn}
                token={token}
                handleGetMoviesGlobal={handleGetMoviesGlobal}
                searchResultGlobal={searchResultGlobal}
                handleAddMovies={handleAddMovies}
                handleDeleteMovies={handleDeleteMovies}
                errorMessage={errorMovieMessage}
                isLoading={isLoadingMovie}
                currentCardId={currentCardId}
                setCurrentCardId={setCurrentCardId} />
              } />
            <Route path="/saved-movies"
              element={<SavedMovies
                isLoggedIn={isLoggedIn}
                token={token}
                handleGetMoviesLocal={handleGetMoviesLocal}
                searchResultLocal={searchResultLocal}
                handleDeleteMovies={handleDeleteMovies}
                errorMessage={errorMovieMessage}
                isLoading={isLoadingMovie} />
              } />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
