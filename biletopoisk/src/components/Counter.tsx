"use client";

import { useStore } from "@/lib/store";

export const Counter = () => {
  const cartItems = useStore((state) => state.cartItems);

  if (!cartItems.length) {
    return null;
  }

  return (
    <span className="flex justify-center items-center bg-orange w-7 h-7 rounded-lg">
      {cartItems.length}
    </span>
  );
};
