import { useEffect, useState } from "react";
import { getMovieById } from "../services/movieApi";
import type { Movie } from "../types/movie";

export function useMovieDetails(id: string | undefined) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No movie ID provided");
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const data = await getMovieById(id);
        if (!data) {
          setError("Movie not found");
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { movie, loading, error };
}
