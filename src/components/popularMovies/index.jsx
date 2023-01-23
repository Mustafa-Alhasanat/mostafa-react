import React, { useState, useEffect, useContext } from "react";
import getData from "services/get-data";
import MovieCard from "components/movieCard";
import { MoviesContext } from "context/movies-context";
import {
  StyledLinearProgress,
  StyledMoviesContainer,
  StyledMovieCards,
  StyledButton,
  StyledButtonTitle,
  StyledCircularProgress,
  StyledCircle,
} from "components/popularMovies/popular-movies.styles";

/**
 * A container that represents the main space of the page that has all the movie cards.
 *
 * @return {Element} A styled component (section).
 */
function PopularMovies() {
  const [isListOpened, setIsListOpened] = useState(false);
  const {
    popularMoviesList,
    setPopularMoviesList,
    popularMoviesPage,
    setPopularMoviesPage,
    sortedBy,
    isFetchingData,
    setIsFetchingData,
  } = useContext(MoviesContext);

  useEffect(() => {
    loadMoreHandler();
  }, []);

  /**
   * A function that fetches the next page of movies from the API.
   */
  const loadMoreHandler = async () => {
    setIsFetchingData(true);
    setPopularMoviesPage(popularMoviesPage + 1);
    const data = await getData(sortedBy, popularMoviesPage);
    setPopularMoviesList([...popularMoviesList, ...data]);
    setIsFetchingData(false);
  };

  /**
   * A function that toggle the state that indicates if one of the cards' list is opened.
   */
  const toggleIsOpened = () => {
    setIsListOpened((prev) => !prev);
  };

  return (
    <StyledMoviesContainer>
      {isFetchingData ? (
        <StyledLinearProgress data-testid="progress bar" />
      ) : null}

      <StyledMovieCards id="cards">
        {popularMoviesList.length !== 0 ? (
          popularMoviesList.map((movie, index) => {
            return (
              <MovieCard
                name={movie.original_title}
                vote={movie.vote_average}
                date={movie.release_date}
                overview={movie.overview}
                imageURL={movie.poster_path}
                isListOpened={isListOpened}
                toggleIsOpened={toggleIsOpened}
                movieKey={`${index}${movie.original_title}`}
                key={`${index}${movie.original_title}`}
              />
            );
          })
        ) : (
          <StyledCircularProgress>
            <StyledCircle />
          </StyledCircularProgress>
        )}
      </StyledMovieCards>

      <StyledButton onClick={loadMoreHandler}>
        <StyledButtonTitle>Load More</StyledButtonTitle>
      </StyledButton>
    </StyledMoviesContainer>
  );
}

export default PopularMovies;
