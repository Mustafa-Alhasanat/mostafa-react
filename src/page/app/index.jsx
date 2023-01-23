import React, { useState, useRef, useMemo } from "react";
import Header from "components/header";
import LeftPalette from "components/leftPalette";
import PopularMovies from "components/popularMovies";
import Footer from "components/footer";
import SearchContainer from "components/searchContainer";
import {
  StyledMain,
  StyledMiddleSpace,
  StyledWorkspace,
  StyledUpperTitle,
} from "page/app/app.styled";
import { MoviesContext } from "context/movies-context";
import { SearchContext } from "context/search-context";

/**
 * The main app component that has all the sections.
 *
 * @return {Element} A styled component (main).
 */
function App() {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [popularMoviesPage, setPopularMoviesPage] = useState(1);

  const [sortedBy, setSortedBy] = useState("Popularity Descending");
  const [isFetchingData, setIsFetchingData] = useState(false);

  const searchFieldRef = useRef(null);
  const [searchIsFilled, setSearchIsFilled] = useState(false);
  const [searchIsOpened, setSearchIsOpened] = useState(false);

  const moviesProvider = useMemo(
    () => ({
      popularMoviesList,
      setPopularMoviesList,
      popularMoviesPage,
      setPopularMoviesPage,
      sortedBy,
      setSortedBy,
      isFetchingData,
      setIsFetchingData,
    }),
    [
      popularMoviesList,
      setPopularMoviesList,
      popularMoviesPage,
      setPopularMoviesPage,
      sortedBy,
      setSortedBy,
      isFetchingData,
      setIsFetchingData,
    ]
  );

  const searchProvider = useMemo(
    () => ({
      searchFieldRef,
      searchIsFilled,
      setSearchIsFilled,
      searchIsOpened,
      setSearchIsOpened,
    }),
    [
      searchFieldRef,
      searchIsFilled,
      setSearchIsFilled,
      searchIsOpened,
      setSearchIsOpened,
    ]
  );

  return (
    <MoviesContext.Provider value={moviesProvider}>
      <SearchContext.Provider value={searchProvider}>
        <StyledMain data-testid="main component">
          <StyledWorkspace>
            <Header />

            <StyledUpperTitle>Popular Movies</StyledUpperTitle>

            {searchIsOpened && <SearchContainer />}

            <StyledMiddleSpace>
              <LeftPalette />
              <PopularMovies />
            </StyledMiddleSpace>
          </StyledWorkspace>

          <Footer />
        </StyledMain>
      </SearchContext.Provider>
    </MoviesContext.Provider>
  );
}

export default App;
