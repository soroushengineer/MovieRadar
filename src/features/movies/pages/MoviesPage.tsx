import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useMovieSearch } from "../hooks/useMovieSearch";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

export default function MoviesPage() {
  const { movies, loading, error } = useMovies();
  const [query, setQuery] = useState("");

  const { results, loading: searchLoading } = useMovieSearch(query);

  const showingSearchResults = query.trim().length > 0;

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  const moviesToShow = showingSearchResults ? results : movies;

  return (
    <div>
      <h1>Movies</h1>

      <SearchBar value={query} onChange={setQuery} />

      {showingSearchResults && searchLoading && <p>Searching...</p>}

      {moviesToShow.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <MovieGrid movies={moviesToShow} />
      )}
    </div>
  );
}
