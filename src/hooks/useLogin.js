import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function useLogin() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
    navigate('/movies');
  }

  function logout() {
    setIsLoggedIn(false);
    navigate('/');
  }

  return { isLoggedIn, login, logout }
}

export default useLogin;