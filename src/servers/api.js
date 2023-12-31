import axios from "axios";

const apiKey = '54ea2173c00863219e76419305eca11f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrend = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  return response.data;
}

export const fetchMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}`);
  return response.data;
}

export const fetchCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${apiKey}`);
  return response.data;
}

export const fetchReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${apiKey}`);
  return response.data;
}

export const fetchMoviesByName = async (movieNmae) => {
  const response = await axios.get(`/search/movie?api_key=${apiKey}&query=${movieNmae}&include_adult=false&page=1`);
  return response.data;
}