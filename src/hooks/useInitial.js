import { useEffect } from "react";
import useAuth from "./useAuth";
import useMovie from "./useMovies";

function useInitial(token, isLoggedIn) {
  const { checkToken, handleGetProfile } = useAuth();
  const { handleGetMovies } = useMovie();

  useEffect(() => {
    checkToken();
}, [token]);

  useEffect(() => {
    handleGetMovies(token)
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetProfile()
    }
  }, [isLoggedIn]);
}

export default useInitial;