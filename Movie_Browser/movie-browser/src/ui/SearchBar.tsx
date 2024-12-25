import React, { useState } from 'react';
import { fetchMoviesbySearch } from "../api/tmdb";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const fetchedResults = await fetchMoviesbySearch(query);
      console.log(fetchedResults);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-8 bg-blue-50 py-6 px-8 shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/3 p-2 bg-white text-gray-800 border-2 border-blue-300 rounded-lg"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
