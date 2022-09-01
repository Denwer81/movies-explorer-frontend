import { useEffect } from "react";
import useAuth from "./useAuth";
import useMovie from "./useMovies";

function useInitial() {
  const { handleGetProfile, checkToken, token, isLoggedIn} = useAuth();
  const { handleGetMovies } = useMovie();

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetProfile()
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (token) {
      handleGetMovies(token)
    }
  }, []);
}

export default useInitial;