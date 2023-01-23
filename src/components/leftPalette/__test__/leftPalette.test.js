import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LeftPalette from "components/leftPalette";
import SortTabContents from "components/sortingTab";
import * as axios from "axios";

jest.mock("axios");

describe("Testing the header", () => {
  beforeEach(() => {
    render(
      <LeftPalette
        changeFetchingDataState={jest.fn()}
        sortedBy="Popularity Descending"
        changeSortingTechnique={jest.fn()}
        updateMoviesList={jest.fn()}
        updateMoviesPage={jest.fn()}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("makes a search on clicking the button", async () => {
    const searchButtonElement = screen.getByTestId("search button");
    const selectingSortButtonElement = screen.getByTestId("selecting sorting button");

    render(
      <SortTabContents
        sortBoxRef={{current: {value: null} }}
        sortBoxSelection="Popularity Descending"
        changeBoxSelection={jest.fn()}
        changeSortingTechnique={jest.fn()}
        changeSearchBtnState={jest.fn()}
      />
    );

    fireEvent.click(selectingSortButtonElement);

    const sortingSelection = screen.getByTestId(
      "selected: Popularity Descending"
    );
    fireEvent.click(sortingSelection);

    axios.get.mockImplementation(() => Promise.resolve({ data: [] }));
    fireEvent.click(searchButtonElement);

    expect(searchButtonElement).toBeDefined()
    expect(selectingSortButtonElement).toBeDefined()
    expect(sortingSelection).toBeDefined()
  
  });

  it("rolls up the sorting box when clicking the button", () => {
    const sortBoxMainButton = screen.getByTestId("main box: Sort")

    fireEvent.click(sortBoxMainButton)
    fireEvent.click(sortBoxMainButton)
    
    const sortBoxHiddenButton = screen.getByTestId("hidden box: Sort")

    expect(sortBoxHiddenButton).toBeDefined()
  })
});
