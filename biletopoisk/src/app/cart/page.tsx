"use client";

import { useMemo } from "react";

import { MovieItem } from "@/components/MovieItem";
import { IMovie } from "@/lib/api";
import { useStore } from "@/lib/store";

export default function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  const uniqueCartItems = useMemo(
    () => [
      ...cartItems.reduce((set: Set<IMovie>, item: IMovie) => {
        set.add(item);
        return set;
      }, new Set<IMovie>()),
    ],
    [cartItems]
  );

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        {uniqueCartItems.map((movie) => {
          return (
            <MovieItem key={movie.id} movie={movie} deleteAllButton={true} />
          );
        })}
      </div>
      <div className="flex justify-between items-center p-6 bg-white rounded-lg font-bold">
        <p>Итого билетов:</p>
        <p>{cartItems.length}</p>
      </div>
    </div>
  );
}
