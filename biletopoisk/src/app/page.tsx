"use client";

import { useState } from "react";
import { Select } from "@/components/select";
import { getCinemasRequest, getMoviesRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { MovieItem } from "@/components/movieItem";

export default function Home() {
  const [filter, setFilter] = useState({
    name: "",
    cinema: "",
    genre: "",
  });

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const key = event.target.name;
    const value = event.target.value;

    setFilter((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const movies = useQuery({ queryKey: ["movies"], queryFn: getMoviesRequest });
  const cinemas = useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinemasRequest,
  });

  const genresUnique = [...new Set(movies.data?.map((movie) => movie.genre))];
  const genresOptions = genresUnique.map((genre) => {
    return { value: genre, label: genre };
  });

  const cinemasOptions = (cinemas.data || []).map((cinema) => {
    return { value: cinema.id, label: cinema.name };
  });

  const filteredMovies = movies.data?.filter((movie) => {
    if (filter.cinema && cinemas.data) {
      console.log(cinemas.data);

      const currentCinema = cinemas.data.find((cinema) => {
        return filter.cinema === cinema.id;
      });

      return currentCinema?.movieIds.includes(movie.id);
    }

    if (filter.genre && cinemas.data) {
      return filter.genre === movie.genre;
    }

    if (filter.name && cinemas.data) {
      return movie.title.toLowerCase().includes(filter.name.toLowerCase());
    }

    return true;
  });

  return (
    <div className="flex gap-6">
      <div className="flex flex-col w-96 p-6 bg-white rounded-lg">
        <h1 className="font-bold">Фильтр поиска</h1>
        <div className="flex flex-col mt-5">
          <label className="flex flex-col">
            Название
            <input
              name="name"
              className="mt-1"
              type="text"
              placeholder="Введите название"
              onChange={handleFilterChange}
            />
          </label>

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
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {filteredMovies?.map(({ id, title, posterUrl, genre }) => {
          return (
            <MovieItem
              key={id}
              id={id}
              title={title}
              posterUrl={posterUrl}
              genre={genre}
            />
          );
        })}
      </div>
    </div>
  );
}
