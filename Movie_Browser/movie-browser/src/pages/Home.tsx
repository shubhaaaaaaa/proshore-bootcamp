import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../api/tmdb";
import { TMovie } from "../types/movieType";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: { movies: TMovie[] }) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </>
  );
};

export default Home;
