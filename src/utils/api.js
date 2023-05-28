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

async function getMovieDetails(id, controllerSignal) {
  const r = await axios.get(`/movie/${id}?language=en-US`, {
    signal: controllerSignal,
  });
  return r.data;
}

async function getMovieCast(id, controllerSignal) {
  const r = await axios.get(`/movie/${id}}/credits?language=en-US`, {
    signal: controllerSignal,
  });
  return r.data;
}
async function getMovieReviews(id, controllerSignal) {
  const r = await axios.get(`/movie/${id}}/reviews?language=en-US&page=1`, {
    signal: controllerSignal,
  });
  return r.data.results;
}
async function getMoviesByQuery(query, controllerSignal) {
  const r = await axios.get(
    `search/movie?query=${query}&include_adult=true&language=en-US`,
    {
      signal: controllerSignal,
    }
  );
  return r.data.results;
}
export {
  getMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMoviesByQuery,
};
