import type { Movie } from "../types/movie";

// ---- Fake Movie Database ---- //
const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    genre: ["Sci-Fi", "Action"]
  },
  {
    id: "2",
    title: "Avengers Endgame",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
    description: "The remaining heroes unite to reverse a devastating cosmic catastrophe, embarking on a perilous mission through time to restore balance and save the universe.",
    genre: ["Sci-Fi", "Drama"]
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    description: "Batman faces the Joker, a criminal mastermind causing chaos in Gotham.",
    genre: ["Action", "Crime", "Drama"]
  }
];

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function getMovies(): Promise<Movie[]> {
    await delay(500);
    return movies;
  }
  
  export async function getMovieById(id: string): Promise<Movie | null> {
    await delay(500);
    const movie = movies.find(m => m.id === id);
    return movie ?? null;
  }
  
  export async function searchMovies(query: string): Promise<Movie[]> {
  await delay(400);
  const lower = query.toLowerCase();
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(lower)
  );
}
