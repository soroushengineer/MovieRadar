import type { Movie } from "../types/movie";

// ---- Fake Movie Database ---- //
const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/51xJ6vN9RSL._AC_.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    genre: ["Sci-Fi", "Action"]
  },
  {
    id: "2",
    title: "Avengers Endgame",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
    description: "Explorers travel through a wormhole in space in an attempt to save humanity.",
    genre: ["Sci-Fi", "Drama"]
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51k0qa6qA3L._AC_.jpg",
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
