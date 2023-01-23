import { render, screen } from "@testing-library/react";
import App from "page/app";
import GlobalStyle from "styles/global";

describe("Testing the app component", () => {
  beforeEach(() => {
    render(
      <>
        <GlobalStyle />
        <App />
      </>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.only("renders the app component", () => {
    const mainElement = screen.getByTestId("main component");
    expect(mainElement).toBeDefined();
  });
  
  xit("renders the app page", () => {
    render(<App />);

    // render(
    //   <LeftPalette
    //     changeFetchingDataState={jest.fn()}
    //     sortedBy="Popularity Descending"
    //     changeSortingTechnique={jest.fn()}
    //     updateMoviesList={jest.fn()}
    //     updateMoviesPage={jest.fn()}
    //   />
    // );

    // render(
    //   <SortTabContents
    //   sortBoxRef={{current: {value: null} }}
    //   sortBoxSelection="Popularity Descending"
    //   changeBoxSelection={jest.fn()}
    //   changeSortingTechnique={jest.fn()}
    //   changeSearchBtnState={jest.fn()}
    //   />
    //   );

    // const selectingSortButtonElement = screen.getByTestId("selecting sorting button");
    // fireEvent.click(selectingSortButtonElement);

    // const sortingSelection = screen.getByTestId("selected: Popularity Descending");
    // fireEvent.click(sortingSelection);
  });
});
