import { handleFetch } from "./fetching";
import { movieUrlApi } from "./constants";
import { baseUrlApi } from "./constants";

export function getMoviesDB() {
  return handleFetch({ url: `${movieUrlApi}`, method: 'GET' });
}

export function getMovies(token) {
  return handleFetch({ url: `${baseUrlApi}movies`, method: 'GET', token });
}

export function addMovies(token, data) {
  return handleFetch({ url: `${baseUrlApi}movies`, method: 'POST', token }, data);
}

export function deleteMovies(token, movieId) {
  return handleFetch({ url: `${baseUrlApi}movies/${movieId}`, method: 'DELETE', token });
}