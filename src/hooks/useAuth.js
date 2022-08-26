import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { register, login, getProfile, editProfile } from '../utils/MainApi'

function useAuth() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleRegister(name, email, password) {
    setIsLoading(true);
    register(name, email, password)
      .then((res => {
        if (res) {
          handleLogin(email, password);
        }
      }))
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage('')
        }, 2500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    login(email, password)
      .then((res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setToken(res.token);
          setIsLoggedIn(true);
          navigate('/movies')
        }
      }))
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage('')
        }, 2500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleLogout(setCurrentUser) {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate('/');
  }

  function handleGetProfile(setCurrentUser) {
    getProfile(token)
      .then(userData => {
        setCurrentUser({
          _id: userData._id,
          name: userData.name,
          email: userData.email
        })
      })
      .catch(err => console.log(err));
  }

  function handleEditProfile(setCurrentUser, name, email) {
    setIsLoading(true);
    editProfile(token, name, email)
      .then(userData => {
        setCurrentUser({
          _id: userData._id,
          name: userData.name,
          email: userData.email
        })
        setErrorMessage('Вы успешно изменили профиль!')
        setTimeout(() => {
          setErrorMessage('')
        }, 2500)
      })
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage('')
        }, 2500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');

      getProfile(jwt)
        .then((userData) => {
          if (userData._id) {
            setToken(jwt);
            setIsLoggedIn(true);
            navigate('/movies');
          } else navigate('/');
        });
    }
  }

  return {
    isLoggedIn,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetProfile,
    handleEditProfile,
    checkToken,
    token,
    errorMessage,
    isLoading,
  }
}

export default useAuth;