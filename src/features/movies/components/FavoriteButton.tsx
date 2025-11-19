import type { Movie } from "../types/movie";
import { useFavorites } from "../../../context/FavoritesContext";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  movie: Movie;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  return (
    <button
      className="favorite-btn"
      onClick={() =>
        favorite ? removeFavorite(movie.id) : addFavorite(movie)
      }
    >
      {favorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
    </button>
  );
}
