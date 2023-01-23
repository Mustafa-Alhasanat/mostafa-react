import { createContext } from "react";

export const MoviesContext = createContext({
  popularMoviesList: [],
  setPopularMoviesList: () => {},
  popularMoviesPage: 0,
  setPopularMoviesPage: () => {},
  sortedBy: "",
  setSortedBy: () => {},
  isFetchingData: false,
  setIsFetchingData: () => {},
});
