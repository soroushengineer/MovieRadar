import MoviePoster from "./MoviePoster";
import type { Movie } from "../types/movie";
import "./MovieDetails.css";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="details-container">
      <div className="details-poster">
        <MoviePoster src={movie.poster} alt={movie.title} width={280} height={420} />
      </div>

      <div className="details-info">
        <h1 className="details-title">{movie.title}</h1>
        <p className="details-meta">
          {movie.year} · ⭐ {movie.rating}
        </p>

        <div className="details-genres">
          {movie.genre.map(g => (
            <span key={g} className="genre-chip">
              {g}
            </span>
          ))}
        </div>

        <p className="details-description">{movie.description}</p>
      </div>
    </div>
  );
}
