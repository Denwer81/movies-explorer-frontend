import { handleFetch, checkResponse } from "./fetching";
import { movieUrlApi } from "./constants";
import { baseUrlApi } from "./constants";

export function getMoviesDB( ) {
    return fetch(movieUrlApi, {
      method: 'GET'
    })
      .then(res => checkResponse(res));
}

// export function getMoviesDB( token ) {
//   return handleFetch({ url: `${movieUrlApi}`, method: 'GET', token });
// }

export function getMovies(token) {
  return handleFetch({ url: `${baseUrlApi}movies`, method: 'GET', token });
}

export function addMovies(token, data) {
  return handleFetch({ url: `${baseUrlApi}movies`, method: 'POST', token }, data);
}

export function deleteMovies(token, movieId) {
  return handleFetch({ url: `${baseUrlApi}movies/${movieId}`, method: 'DELETE', token });
}