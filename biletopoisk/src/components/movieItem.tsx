import Image from "next/image";
import Link from "next/link";

export const MovieItem = ({
  id,
  title,
  posterUrl,
  genre,
}: {
  id: string;
  title: string;
  posterUrl: string;
  genre: string;
}) => {
  return (
    <article className="flex items-start gap-6 w-100 w-full bg-white rounded-lg p-6">
      <Link href={`/film/${id}`}>
        <Image
          className="rounded-lg object-cover h-32"
          src={posterUrl}
          alt={`Постер фильма ${{ title }}`}
          width={100}
          height={128}
        />
      </Link>

      <div className="flex flex-col flex-1">
        <h2 className="font-bold">{title}</h2>
        <p className="italic">{genre}</p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="flex items-center justify-center text-white rounded-lg bg-orange w-5 h-5">
          -
        </button>
        <p>0</p>
        <button className="flex items-center justify-center text-white rounded-lg bg-orange w-5 h-5">
          +
        </button>
      </div>
    </article>
  );
};
