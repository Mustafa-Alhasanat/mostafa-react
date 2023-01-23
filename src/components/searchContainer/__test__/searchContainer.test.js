import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SearchContainer from "components/searchContainer";

describe("Testing the movie component", () => {
  beforeEach(() => {
    render(<SearchContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays the relevant movies as the search term", async () => {
    // const searchFieldElement = screen.findByPlaceholderText("search for a movie, tv show, person,...");
    const searchFieldElement = screen.findByTestId("content-input");
    fireEvent.change(searchFieldElement, { target: { value: "thor" } });

    // await waitFor(() => {
    // })

  });
});
