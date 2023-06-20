export async function getMoviesRequest(): Promise<
  Array<{
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[],
  }>
> {
  const res = await fetch("http://localhost:3001/api/movies");

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export async function getCinemasRequest(): Promise<
  Array<{ id: string, name: string, movieIds: string[] }>
> {
  const res = await fetch("http://localhost:3001/api/cinemas");

  if (!res.ok) {
    throw new Error("Failed to fetch cinemas");
  }

  return res.json();
}
