import { useFavorites } from "../../../context/FavoritesContext";
import MovieGrid from "../components/MovieGrid";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>You haven't added any favorite movies yet.</p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  );
}
