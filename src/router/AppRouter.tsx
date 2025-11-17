import { Routes, Route } from "react-router-dom";
import MoviesPage from "../features/movies/pages/MoviesPage";
import MovieDetailsPage from "../features/movies/pages/MovieDetailsPage";
import FavoritesPage from "../features/movies/pages/FavoritesPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
