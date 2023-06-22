"use client";

import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCinemasRequest, getMoviesRequest } from "@/lib/api";
import { genres, genresMap } from "@/lib/constants";

import { TextInput } from "@/components/TextInput";
import { Select } from "@/components/Select";
import { MovieItems } from "@/components/MovieItems";

export default function Home() {
  const [filter, setFilter] = useState({
    name: "",
    cinema: "",
    genre: "",
  });

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const key = event.target.name;
      const value = event.target.value;

      setFilter((prev) => {
        return {
          ...prev,
          [key]: value,
        };
      });
    },
    []
  );

  const movies = useQuery({
    queryKey: [filter.cinema, "movies"],
    queryFn: getMoviesRequest,
  });

  const cinemas = useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinemasRequest,
  });

  const genresOptions = useMemo(() => {
    const genresUnique = movies.data
      ? [...new Set(movies.data.map((movie) => movie.genre))]
      : genres;

    return genresUnique.map((genre) => {
      return { value: genre, label: genresMap[genre] };
    });
  }, [movies.data]);

  const cinemasOptions = useMemo(
    () =>
      (cinemas.data ?? []).map((cinema) => {
        return { value: cinema.id, label: cinema.name };
      }),
    [cinemas.data]
  );

  const filteredMovies = useMemo(
    () =>
      movies.data
        ?.filter((movie) => {
          if (filter.genre) {
            return filter.genre === movie.genre;
          }

          return true;
        })
        .filter((movie) => {
          if (filter.name) {
            return movie.title
              .toLowerCase()
              .includes(filter.name.toLowerCase());
          }

          return true;
        }),
    [movies.data, filter.genre, filter.name]
  );

  return (
    <div className="flex gap-6">
      <div className="flex flex-col w-96 p-6 bg-white rounded-lg">
        <div className="sticky top-32">
          {cinemas.isSuccess ? (
            <>
              <h1 className="font-bold">Фильтр поиска</h1>
              <div className="flex flex-col mt-5 relative">
                <TextInput
                  name={"name"}
                  label={"Название"}
                  emptyLabel={"Введите название"}
                  value={filter.name}
                  type="search"
                  onChange={handleFilterChange}
                />

                <Select
                  name="genre"
                  label="Жанр"
                  emptyLabel="Выберите жанр"
                  options={genresOptions}
                  onChange={handleFilterChange}
                  value={filter.genre}
                />

                <Select
                  name="cinema"
                  label="Кинотеатр"
                  emptyLabel="Выберите кинотеатр"
                  options={cinemasOptions}
                  onChange={handleFilterChange}
                  value={filter.cinema}
                />
              </div>
            </>
          ) : (
            <div className="text-3xl">Загрузка фильтров...</div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {movies.isSuccess ? (
          <MovieItems movies={filteredMovies} />
        ) : (
          <div className="flex flex-col p-6 bg-white rounded-lg">
            <div className="text-3xl">Загрузка фильмов...</div>
          </div>
        )}
      </div>
    </div>
  );
}
