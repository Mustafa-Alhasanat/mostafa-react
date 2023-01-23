import React, { useState, useRef, useContext } from "react";
import SortTabContents from "components/sortingTab";
import getData from "services/get-data";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { MoviesContext } from "context/movies-context";
import {
  StyledButton,
  StyledLeftPalette,
  StyledPaletteMainBox,
  StyledPaletteUpperBox,
  StyledHiddenBox,
} from "components/leftPalette/left-palette.styles";

/**
 * A container that represents the left palette that has all tools (sort, filter, ...).
 *
 * @return {Element} A styled component (section).
 */
function LeftPalette() {
  const sortBoxRef = useRef(null);
  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const [sortBoxSelection, setSortBoxSelection] = useState(
    "Popularity Descending"
  );

  const [sortIsOpened, setSortIsOpened] = useState(true);
  const [filtersIsOpened, setFiltersIsOpened] = useState(false);
  const [whereToWatchIsOpened, setWhereToWatchIsOpened] = useState(false);

  const {
    setPopularMoviesList,
    setPopularMoviesPage,
    sortedBy,
    setIsFetchingData,
  } = useContext(MoviesContext);

  /**
   * A function that changes the sorting technique and the list of the movies accordingly.
   */
  const changeSearchHandler = async () => {
    setIsFetchingData(true);
    const data = await getData(sortedBy, 1);
    setPopularMoviesPage(1);
    setPopularMoviesList(data);
    setIsFetchingData(false);
  };

  /**
   * A function that changes the selected sorting technique from the box.
   *
   * @param {string} newSelection The new sorting technique.
   */
  const changeBoxSelection = (newSelection) => {
    setSortBoxSelection(newSelection);
  };

  /**
   * A function that changes the state of the search button (active/inactive).
   *
   * @param {bool} newState The new state.
   */
  const changeSearchBtnState = (newState) => {
    setSearchButtonActive(newState);
  };

  return (
    <StyledLeftPalette>
      {[
        {
          title: "Sort",
          tab: (
            <SortTabContents
              sortBoxSelection={sortBoxSelection}
              changeBoxSelection={changeBoxSelection}
              sortBoxRef={sortBoxRef}
              changeSearchBtnState={changeSearchBtnState}
            />
          ),
          isOpened: sortIsOpened,
          setIsOpened: setSortIsOpened,
        },
        {
          title: "Filters",
          tab: null,
          isOpened: filtersIsOpened,
          setIsOpened: setFiltersIsOpened,
        },
        {
          title: "Where To Watch",
          tab: null,
          isOpened: whereToWatchIsOpened,
          setIsOpened: setWhereToWatchIsOpened,
        },
      ].map((slider, index) => {
        return (
          <StyledPaletteMainBox key={`main box number: ${index}`}>
            <StyledPaletteUpperBox
              data-testid={`main box: ${slider.title}`}
              key={`upper box number: ${index}`}
              onClick={() => {
                slider.setIsOpened((prev) => !prev);
              }}
            >
              <div>{slider.title}</div>
              {slider.isOpened ? (
                <RiArrowDownSLine size={24} />
              ) : (
                <RiArrowRightSLine size={24} />
              )}
            </StyledPaletteUpperBox>

            {slider.isOpened && (
              <StyledHiddenBox
                data-testid={`hidden box: ${slider.title}`}
                key={`hidden box number: ${index}`}
              >
                {slider.tab}
              </StyledHiddenBox>
            )}
          </StyledPaletteMainBox>
        );
      })}

      <StyledButton
        data-testid="search button"
        searchButtonActive={searchButtonActive}
        onClick={changeSearchHandler}
        disabled={!searchButtonActive}
      >
        Search
      </StyledButton>
    </StyledLeftPalette>
  );
}

export default LeftPalette;
