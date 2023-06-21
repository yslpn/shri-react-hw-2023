"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { getCommentsForMovie, getMovieRequest } from "@/lib/api";
import { genresMap } from "@/lib/constants";

import { Comment } from "@/components/Comment";
import { FilmToCartButtons } from "@/components/FilmToCartButtons";

export default function Page({ params }: { params: { id: string } }) {
  const filmId = params.id;

  const movie = useQuery([filmId, "movie"], getMovieRequest);
  const comments = useQuery([filmId, "comments"], getCommentsForMovie);

  return (
    <div className="flex flex-col gap-6">
      <div className=" bg-white rounded-lg">
        <section className="flex items-start gap-8 w-100 w-full bg-white rounded-lg p-6">
          {movie.isSuccess ? (
            <>
              <Image
                className="w-96 rounded-lg"
                src={movie.data.posterUrl}
                alt="постер"
                height={500}
                width={400}
                priority={true}
              />
              <div className="flex flex-col flex-1">
                <h1 className="text-3xl mb-2">{movie.data.title}</h1>
                <p className="mb-4">
                  <span className="font-bold">Жанр:</span>{" "}
                  {genresMap[movie.data.genre]}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Год выпуска:</span>{" "}
                  {movie.data.releaseYear}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Рейтинг:</span>{" "}
                  {movie.data.rating}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Режиссер:</span>{" "}
                  {movie.data.director}
                </p>
                <p className="mt-4">
                  <span className="font-bold block mb-4">Описание:</span>
                  {movie.data.description}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <FilmToCartButtons movie={movie.data} />
              </div>
            </>
          ) : (
            <div className="text-3xl">Загрузка данных фильма...</div>
          )}
        </section>
      </div>
      <div className="flex flex-col gap-6">
        {comments.isSuccess ? (
          comments.data?.map(({ id, name, text, rating }) => {
            return <Comment key={id} name={name} text={text} rating={rating} />;
          })
        ) : (
          <div className="flex flex-col p-6 bg-white rounded-lg">
            <div className="text-3xl">Загрузка комментариев...</div>
          </div>
        )}
      </div>
    </div>
  );
}
