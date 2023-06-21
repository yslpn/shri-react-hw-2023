"use client";

import { IMovie } from "@/lib/api";
import { useStore } from "@/lib/store";
import Modal from "./Modal";
import { useState } from "react";

export const FilmToCartButtons = ({
  movie,
  deleteAllButton,
}: {
  movie: IMovie;
  deleteAllButton?: boolean;
}) => {
  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const removeAllById = useStore((state) => state.removeAllById);
  const cartItems = useStore((state) => state.cartItems);
  const count = cartItems.reduce(
    (acc, item) => (item.id === movie.id ? acc + 1 : acc),
    0
  );

  const isShowModalWarning = deleteAllButton && count === 1;
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = (movie: IMovie) => {
    if (isShowModalWarning) {
      setIsOpen(true);
    } else {
      removeItem(movie);
    }
  };

  return (
    <>
      <button
        className="flex items-center justify-center text-white rounded-lg bg-orange w-5 h-5 disabled:bg-orange-disabled"
        onClick={() => handleRemove(movie)}
        disabled={!count}
      >
        —
      </button>
      <p>{count}</p>
      <button
        className="flex items-center justify-center text-white rounded-lg bg-orange w-5 h-5 disabled:bg-orange-disabled"
        onClick={() => addItem(movie)}
        disabled={cartItems.length >= 30}
      >
        +
      </button>

      {deleteAllButton && (
        <>
          <button onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#333"
                d="M16.067 15.183a.624.624 0 1 1-.884.884L10 10.884l-5.183 5.183a.625.625 0 1 1-.884-.884L9.117 10 3.933 4.817a.625.625 0 1 1 .884-.884L10 9.117l5.183-5.184a.625.625 0 0 1 .884.884L10.884 10l5.183 5.183Z"
              />
            </svg>
          </button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={() => removeAllById(movie.id)}
          />
        </>
      )}
    </>
  );
};