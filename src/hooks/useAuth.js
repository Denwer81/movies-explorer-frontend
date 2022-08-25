import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { register, authorize, getProfile, editProfile } from '../utils/MainApi'

function useAuth() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function signIn(name, email, password) {
    setIsLoading(true);
    register(name, email, password)
      .then((res => {
        if (res) {
          login(email, password);
        }
      }))
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage('')
        }, 3500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function login(email, password) {
    setIsLoading(true);
    authorize( email, password)
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
        }, 3500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function logout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  }

  function getUser(setCurrentUser) {
    getProfile(token)
      .then(userData => {
        setCurrentUser({
          _id: userData._id,
          name: userData.name,
          email: userData.email
        })
        .catch(err => console.log(err));
    })
  }

  function updateProfile() {
    editProfile()
  }

  return { isLoggedIn, signIn, login, logout, getUser, updateProfile, token, errorMessage, isLoading }
}

export default useAuth;