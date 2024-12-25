import { createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../types/movieType"; // Import types

const initialState: TMovie[] = []; // Initial state is an empty array

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      return action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
