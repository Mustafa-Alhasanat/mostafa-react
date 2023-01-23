import { createContext } from "react";

export const SearchContext = createContext({
  searchFieldRef: null,
  searchIsFilled: false,
  setSearchIsFilled: () => {},
  searchIsOpened: false,
  setSearchIsOpened: () => {},
});
