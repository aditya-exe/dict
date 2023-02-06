import { create } from "zustand";

type State = {
  font: string;
  query: string;
  setFont: (newFont: string) => void;
  setQuery: (newQuery: string) => void;
}

export const useStore = create<State>((set) => ({
  font: "",
  query: "",
  setFont: (newFont: string) => {
    set(() => ({
      font: newFont,
    }));
  },
  setQuery: (newQuery: string) => {
    set(() => ({
      query: newQuery
    }));
  },
}));