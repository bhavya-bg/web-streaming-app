import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchPopularMovies().then(setMovies);
    } else {
      const results = await searchMovies(query);
      setMovies(results);
    }
  };

  return (
    <>
      <Home.Header onSearch={handleSearch} />
      <div style={{ padding: "1rem" }}>
        <MovieGrid movies={movies} />
      </div>
    </>
  );
}

import Header from "../components/Header";
Home.Header = Header;
