import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { RiArrowDownSFill } from "react-icons/ri";
import constants from "utils/constants";
import { MoviesContext } from "context/movies-context";
import {
  StyledTabContainer,
  StyledSection,
  StyledSubTitle,
  StyledSelectionButton,
  StyledSelections,
  StyledSelectionItem,
  StyledButtonText,
} from "components/sortingTab/sorting-tab.styles";

/**
 * A container that represents the sorting box in the left palette.
 *
 * @param {object} sortBoxRef A reference object to reach and control the box with the sorting technique selection.
 * @param {string} sortBoxSelection A string that represents the current selection of the sorting technique.
 * @param {func} changeBoxSelection A function that changes the current sorting technique selection from the box.
 * @param {func} changeSearchBtnState A function that changes the state of the search button (enabled/disabled).
 *
 * @return {Element} A styled component (div).
 */
function SortTabContents({
  sortBoxRef,
  sortBoxSelection,
  changeBoxSelection,
  changeSearchBtnState,
}) {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  const { setSortedBy } = useContext(MoviesContext);

  return (
    <StyledTabContainer>
      <StyledSection>
        <StyledSubTitle>Sort Results By</StyledSubTitle>

        <StyledSelectionButton
          data-testid="selecting sorting button"
          IsOpened={isOptionsOpened}
          onClick={() => setIsOptionsOpened(!isOptionsOpened)}
        >
          <StyledButtonText ref={sortBoxRef}>
            {sortBoxSelection}
          </StyledButtonText>
          <RiArrowDownSFill size={20} />
        </StyledSelectionButton>

        {isOptionsOpened ? (
          <StyledSelections>
            {Object.keys(constants.sortingTechniques).map(
              (selection, index) => {
                return (
                  <StyledSelectionItem
                    data-testid={`selected: ${selection}`}
                    selected={sortBoxSelection}
                    current={selection}
                    key={`${index}${selection}`}
                    onClick={() => {
                      changeBoxSelection(selection);
                      setSortedBy(selection);
                      changeSearchBtnState(true);
                      setIsOptionsOpened(false);
                    }}
                  >
                    {selection}
                  </StyledSelectionItem>
                );
              }
            )}
          </StyledSelections>
        ) : null}
      </StyledSection>
    </StyledTabContainer>
  );
}

SortTabContents.propTypes = {
  sortBoxRef: PropTypes.object.isRequired,
  sortBoxSelection: PropTypes.string.isRequired,
  changeBoxSelection: PropTypes.func.isRequired,
  changeSearchBtnState: PropTypes.func.isRequired,
};

export default SortTabContents;
