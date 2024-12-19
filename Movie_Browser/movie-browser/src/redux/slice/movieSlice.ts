import { createSlice } from "@reduxjs/toolkit";
import { TMovieState } from "../../types/movieType";

const initialState: TMovieState = {
    movies: []
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload
        }
    }
})

export const { setMovies } = movieSlice.actions
export default movieSlice.reducer