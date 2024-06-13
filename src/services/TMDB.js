import axios from "axios";
import { API_KEY, TMDB_API_BASE_URL } from "../utils/config";

export const getMovies = async () => {
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
