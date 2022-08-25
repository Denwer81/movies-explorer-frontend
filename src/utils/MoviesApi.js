import { handleFetch } from "./fetching";
import { movieUrlApi } from "./constants";
import { baseUrlApi } from "./constants";

export function getMovies(token) {
  return handleFetch({ url: `${movieUrlApi}`, method: 'GET', token });
}

export function addMovies(token, data) {
  return handleFetch({ url: `${baseUrlApi}`, method: 'POST',token }, data);
}

export function deleteMovies(token, movieId) {
  return handleFetch({ url: `${baseUrlApi}${movieId}`, method: 'DELETE',token });
}