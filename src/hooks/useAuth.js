import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { register, authorize } from '../utils/MainApi'

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

  // function login(email, password) {
  //   authorize(email, password)
  //   setIsLoggedIn(true);
  //   navigate('/movies');
  // }

  function logout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  }

  return { isLoggedIn, signIn, login, logout, token, errorMessage, isLoading }
}

export default useAuth;