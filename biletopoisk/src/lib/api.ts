import { QueryFunctionContext } from "@tanstack/react-query";
import { backendDomain } from "./constants";

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
  const [id] = queryKey;
  const res = await fetch(`${backendDomain}/api/reviews?movieId=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch comments for movie");
  }

  return res.json();
}

export async function getMovieRequest({
  queryKey,
}: QueryFunctionContext<string[]>): Promise<IMovie> {
  const [id] = queryKey;
  const res = await fetch(`${backendDomain}/api/movie?movieId=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
}

export async function getMoviesRequest({
  queryKey,
}: QueryFunctionContext<string[]>): Promise<IMovie[]> {
  const [cinema] = queryKey;

  const res = await fetch(
    cinema
      ? `${backendDomain}/api/movies?cinemaId=${cinema}`
      : `${backendDomain}/api/movies`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export async function getCinemasRequest(): Promise<ICinema[]> {
  const res = await fetch(`${backendDomain}/api/cinemas`);

  if (!res.ok) {
    throw new Error("Failed to fetch cinemas");
  }

  return res.json();
}
