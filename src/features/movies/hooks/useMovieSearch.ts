import { useEffect, useState } from "react";
import { searchMovies } from "../services/movieApi";
import type { Movie } from "../types/movie";

export function useMovieSearch(query: string) {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);
      const data = await searchMovies(query);
      setResults(data);
      setLoading(false);
    }, 500); // debounce 500ms

    return () => clearTimeout(delay);
  }, [query]);

  return { results, loading };
}
