import { useEffect, useState } from "react";
import { getMovies } from "../services/movieApi";
import type { Movie } from "../types/movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { movies, loading, error };
}
