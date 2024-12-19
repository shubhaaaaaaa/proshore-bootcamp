import axios from "axios";
import { TMovieState } from "../types/movieType";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchMovies: () => Promise<TMovieState> = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (e) {
    console.log("Error in fetching movies", e);
  }
};
