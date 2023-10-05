const API_KEY = 'f00220778ccd4fb201604ab75b7ec90f';

export async function getTrendingMovies() {
  const endpoint = 'https://api.themoviedb.org/3/trending/movie/day';
  const response = await fetch(`${endpoint}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
}

export async function getMovieDetails(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  return await response.json();
}

export async function getMovieCredits(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.cast;
}

export async function getMovieReviews(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
}
