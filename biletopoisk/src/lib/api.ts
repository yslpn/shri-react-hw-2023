import { QueryFunctionContext } from "@tanstack/react-query";

export interface IMovie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

interface ICinema {
  id: string;
  name: string;
  movieIds: string[];
}

interface IComment {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export async function getCommentsForMovie({
  queryKey,
}: QueryFunctionContext<string[]>): Promise<IComment[]> {
  const [_, id] = queryKey;
  const res = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch comments for movie");
  }

  return res.json();
}

export async function getMovieRequest({
  queryKey,
}: QueryFunctionContext<string[]>): Promise<IMovie> {
  const [_, id] = queryKey;
  const res = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
}

export async function getMoviesRequest(): Promise<IMovie[]> {
  const res = await fetch("http://localhost:3001/api/movies");

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export async function getCinemasRequest(): Promise<ICinema[]> {
  const res = await fetch("http://localhost:3001/api/cinemas");

  if (!res.ok) {
    throw new Error("Failed to fetch cinemas");
  }

  return res.json();
}
