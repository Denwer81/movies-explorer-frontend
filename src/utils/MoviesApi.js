import { handleFetch } from "./fetching";
import { movieUrlApi } from "./constants";
import { baseUrlApi } from "./constants";

export function getMovies(token) {
  handleFetch({ url: `${movieUrlApi}`, method: 'GET', token });
}

export function addMovies(token, data) {
  handleFetch({ url: `${baseUrlApi}`, method: 'POST',token }, data);
}

export function deleteMovies(token, movieId) {
  handleFetch({ url: `${baseUrlApi}${movieId}`, method: 'DELETE',token });
}