import { useMovies } from "../hooks/useMovies";
import MovieGrid from "../components/MovieGrid";

export default function MoviesPage() {
  const { movies, loading, error } = useMovies();

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Movies</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}
