"use client";

import { useMemo, useState } from "react";

import { IMovie } from "@/lib/api";
import { useStore } from "@/lib/store";
import { Modal } from "./Modal";

export const FilmToCartButtons = ({
  movie,
  deleteAllButton,
}: {
  movie: IMovie;
  deleteAllButton?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const removeAllById = useStore((state) => state.removeAllById);
  const cartItems = useStore((state) => state.cartItems);

  const count = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => (item.id === movie.id ? acc + 1 : acc),
        0
      ),
    [cartItems, movie.id]
  );

  const isShowModalWarning = deleteAllButton && count === 1;

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
        className="flex items-center justify-center text-white rounded-md bg-orange w-5 h-5 disabled:bg-orange-disabled"
        onClick={() => handleRemove(movie)}
        disabled={!count}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
        >
          <path
            fill="#fff"
            d="M9.5 1a.375.375 0 0 1-.375.375H.875a.375.375 0 0 1 0-.75h8.25A.375.375 0 0 1 9.5 1Z"
          />
        </svg>
      </button>
      <p>{count}</p>
      <button
        className="flex items-center justify-center text-white rounded-md bg-orange w-5 h-5 disabled:bg-orange-disabled"
        onClick={() => addItem(movie)}
        disabled={cartItems.length >= 30}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
        >
          <path
            fill="#fff"
            d="M10.5 6a.375.375 0 0 1-.375.375h-3.75v3.75a.375.375 0 0 1-.75 0v-3.75h-3.75a.375.375 0 1 1 0-.75h3.75v-3.75a.375.375 0 1 1 .75 0v3.75h3.75A.375.375 0 0 1 10.5 6Z"
          />
        </svg>
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
