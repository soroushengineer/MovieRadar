import { Link } from "react-router-dom";
import MoviePoster from "./MoviePoster";
import type { Movie } from "../types/movie";
import "./MovieCard.css";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <MoviePoster src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>
    </Link>
  );
}
