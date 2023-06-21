"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCinemasRequest, getMoviesRequest } from "@/lib/api";
import { genresMap } from "@/lib/constants";

import { TextInput } from "@/components/TextInput";
import { Select } from "@/components/Select";
import { MovieItem } from "@/components/MovieItem";

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

  if (movies.isLoading || cinemas.isLoading) {
    return <div className="text-3xl">Загрузка...</div>;
  }

  const genresUnique = [...new Set(movies.data?.map((movie) => movie.genre))];
  const genresOptions = genresUnique.map((genre) => {
    return { value: genre, label: genresMap[genre] };
  });

  const cinemasOptions = (cinemas.data || []).map((cinema) => {
    return { value: cinema.id, label: cinema.name };
  });

  const filteredMovies = movies.data
    ?.filter((movie) => {
      if (filter.cinema && cinemas.data) {
        const currentCinema = cinemas.data.find((cinema) => {
          return filter.cinema === cinema.id;
        });

        return currentCinema?.movieIds.includes(movie.id);
      }

      return true;
    })
    .filter((movie) => {
      if (filter.genre) {
        return filter.genre === movie.genre;
      }

      return true;
    })
    .filter((movie) => {
      if (filter.name) {
        return movie.title.toLowerCase().includes(filter.name.toLowerCase());
      }

      return true;
    });

  return (
    <div className="flex gap-6">
      <div className="flex flex-col w-96 p-6 bg-white rounded-lg">
        <div className="sticky top-32">
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
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {filteredMovies?.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
}
