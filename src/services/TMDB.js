import axios from "axios";
import { API_KEY, TMDB_API_BASE_URL } from "../utils/config";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getUpcomingMovies = async (movieId) => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieFromId = async (movieId) => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const searchMovie = async (movieName) => {
  try {
    const response = await axios.get(
      `${TMDB_API_BASE_URL}/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

