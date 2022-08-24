import { handleFetch } from "./fetching";
import { baseUrlApi } from "./constants";

export function register(name, email, password) {
  handleFetch({ url: `${baseUrlApi}signup`, method: 'POST' }, { name, email, password });
}

export function authorize(email, password) {
  handleFetch({ url: `${baseUrlApi}signin`, method: 'POST' }, { email, password });
}

export function getProfile(token) {
  handleFetch({ url: `${baseUrlApi}users/me`, method: 'GET', token });
}

export function editProfile(token, name, email) {
  handleFetch({ url: `${baseUrlApi}users/me`, method: 'PATCH', token }, { name, email });
}
