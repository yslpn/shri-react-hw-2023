import { memo } from "react";

import { IMovie } from "@/lib/api";
import { MovieItem } from "@/components/MovieItem";

export const MovieItems = memo(({ movies }: { movies?: IMovie[] }) => {
  if (!movies) {
    return null;
  }

  return movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });
});

MovieItems.displayName = "MovieItems";
