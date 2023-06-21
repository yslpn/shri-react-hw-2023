import { create } from "zustand";
import { IMovie } from "./api";

interface IStore {
  cartItems: IMovie[];
  addItem: (item: IMovie) => void;
  removeAllById: (id: string) => void;
  removeItem: (item: IMovie) => void;
}

export const useStore = create<IStore>((set) => ({
  cartItems: [],
  addItem: (item: IMovie) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeAllById: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),
  removeItem: (item: IMovie) =>
    set((state) => {
      const indexToRemove = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      return {
        cartItems: [
          ...state.cartItems.slice(0, indexToRemove),
          ...state.cartItems.slice(indexToRemove + 1),
        ],
      };
    }),
}));
