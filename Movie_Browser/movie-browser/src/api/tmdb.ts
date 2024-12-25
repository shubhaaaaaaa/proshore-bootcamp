import axios from "axios";
import { TMovie } from "../types/movieType";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchMovies: () => Promise<TMovie[]> = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
    
  } catch (e) {
    console.log("Error in fetching movies", e);
    return [];
  }
};

export const fetchMoviesbySearch: (query: string) => Promise<TMovie[]> = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
    
  } catch (e) {
    console.log("Error in fetching movies", e);
    return [];
  }
};

