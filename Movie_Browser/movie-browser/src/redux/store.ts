import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
