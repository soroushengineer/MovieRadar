import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";
import FavoriteButton from "../components/FavoriteButton";
import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";


export default function MovieDetailsPage() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <MovieDetailsSkeleton />;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <BackButton />
      <MovieDetails movie={movie} />
      <FavoriteButton movie={movie} />
    </div>
  );
}
