import {
  render,
  screen,
  fireEvent,
  findByTestId,
  waitFor,
} from "@testing-library/react";
import MovieCard from "components/movieCard";
import { StyledPoster } from "components/movieCard/movie-card.styles";

describe("Testing the movie-card component", () => {
  beforeEach(() => {
    render(
      <MovieCard
        name="movie name"
        vote={8.5}
        date=""
        overview=""
        imageURL="test-image-url"
        movieKey=""
        isListOpened={true}
        toggleIsOpened={jest.fn()}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // beforeAll(() => {
  // });

  it("displays the list of items on clicking the three dots", () => {
    const horizontalThreeDotsElement = screen.getByTestId(
      "horizontal three dots"
    );
    fireEvent.click(horizontalThreeDotsElement);

    const hiddenItemsListElement = screen.getByTestId("hidden items list");

    expect(hiddenItemsListElement).toBeDefined();
  });

  it("hides the list of items by default", () => {
    jest.clearAllMocks();
    render(<MovieCard isListOpened={false} />);

    const hiddenItemsListElement = screen.queryByTestId("hidden items list");

    expect(hiddenItemsListElement).toBeNull();
  });

  it("colors the rating circle in yellow if the vote was less the 7", () => {
    jest.clearAllMocks();
    render(<MovieCard vote={5} />);
  });

  it("render a different image on error", () => {
    jest.clearAllMocks();
    const onError = jest.fn();

    render(
      <StyledPoster
        onError={onError}
        alt={"test"}
        src={"src"}
      />
    );
    
    fireEvent.error(screen.getByAltText("test"));

    expect(onError).toHaveBeenCalled();
  });

});
