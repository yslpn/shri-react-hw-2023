"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { getMovieRequest } from "@/lib/api";
import { genresMap } from "@/lib/constants";
import { Loader } from "@/components/Loader";
import { FilmToCartButtons } from "@/components/FilmToCartButtons";

function FilmDetails({ filmId }: { filmId: string }) {
  const movie = useQuery([filmId, "movie"], getMovieRequest);

  return (
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
                <span className="font-bold">Рейтинг:</span> {movie.data.rating}
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
          <div className="text-3xl">
            <Loader text="Загрузка данных фильма" />
          </div>
        )}
      </section>
    </div>
  );
}

export default FilmDetails;
