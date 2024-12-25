import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../api/tmdb";
import { setMovies } from "../redux/slice/movieSlice";

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies); 

    useEffect(() => {
        const fetchData = async () => {
        const data = await fetchMovies();
        dispatch(setMovies(data)); 
        };

        fetchData();
    }, [dispatch]);
    
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800">
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-600 truncate">{movie.title}</h3>
                            <p className="text-blue-500 text-sm mt-2">{movie.release_date}</p>
                            <p className="text-gray-700 text-sm mt-2 truncate">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default MovieList;
