import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useMovieSearch } from "../hooks/useMovieSearch";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import SkeletonGrid from "../../../components/common/SkeletonGrid";


export default function MoviesPage() {
  const { movies, loading, error } = useMovies();
  const [query, setQuery] = useState("");

  const { results, loading: searchLoading } = useMovieSearch(query);
  if (loading) return <SkeletonGrid count={6} />;

  const showingSearchResults = query.trim().length > 0;

  if (error) return <p>{error}</p>;

  const moviesToShow = showingSearchResults ? results : movies;

  return (
    <div>
      <h1>Movies</h1>

      <SearchBar value={query} onChange={setQuery} />

      {showingSearchResults && searchLoading && <p>Searching...</p>}

      {moviesToShow.length === 0 ? (
       <p style={{ marginTop: "1rem", color: "#bbb" }}>
       No movies found. Try another search.
     </p>
      ) : (
        <MovieGrid movies={moviesToShow} />
      )}
    </div>
  );
}
