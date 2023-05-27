import axios from 'axios';
import { BASE_URL, AUTH_KEY } from './Global';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = {
  Authorization: AUTH_KEY,
  accept: 'application/json',
};
async function getMovies(controllerSignal) {
  const r = await axios.get('trending/all/day?language=en-US', {
    signal: controllerSignal,
  });
  return r.data.results;
}

async function getMovieDetails(id) {
  const r = await axios.get(`/movie/${id}?language=en-US`);
  return r.data;
}

export { getMovies, getMovieDetails };
