import { IMovie } from "@/lib/api";
import { genresMap } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FilmToCartButtons } from "./FilmToCartButtons";

export const MovieItem = ({
  movie,
  deleteAllButton,
}: {
  movie: IMovie;
  deleteAllButton?: boolean;
}) => {
  return (
    <article className="flex items-start gap-6 w-100 w-full bg-white rounded-lg p-6">
      <Link href={`/film/${movie.id}`}>
        <Image
          className="rounded-lg object-cover h-32"
          src={movie.posterUrl}
          alt={`Постер фильма ${movie.title}`}
          width={100}
          height={128}
        />
      </Link>

      <div className="flex flex-col flex-1">
        <h2 className="font-bold">
          <Link
            className="transition hover:text-orange"
            href={`/film/${movie.id}`}
          >
            {movie.title}
          </Link>
        </h2>
        <p className="italic">{genresMap[movie.genre]}</p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <FilmToCartButtons movie={movie} deleteAllButton={deleteAllButton} />
      </div>
    </article>
  );
};
