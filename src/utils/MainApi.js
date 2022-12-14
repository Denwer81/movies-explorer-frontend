import { handleFetch } from "./fetching";
import { baseUrlApi } from "./constants";

export function register(name, email, password) {
  return handleFetch({ url: `${baseUrlApi}signup`, method: 'POST' }, { name, email, password });
}

export function login(email, password) {
  return handleFetch({ url: `${baseUrlApi}signin`, method: 'POST' }, { email, password });
}

export function getProfile(token) {
  return handleFetch({ url: `${baseUrlApi}users/me`, method: 'GET', token });
}

export function editProfile(token, name, email) {
  return handleFetch({ url: `${baseUrlApi}users/me`, method: 'PATCH', token }, { name, email });
}
