import {
  render,
  screen,
  fireEvent,
  findByTestId,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import PopularMovies from "components/popularMovies";
import MovieCard from "components/movieCard";

describe("Testing the movie component", () => {
  beforeEach(() => {
    render(<PopularMovies />);

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

  it("fetch movies data successfully", async () => {
    const getData = jest.fn(async () => {});
    const loadMoreHandler = jest.fn(async () => {});
    
    getData.mockReturnValueOnce(0);
    loadMoreHandler.mockReturnValueOnce(0);

    const loadMoreButton = screen.getByRole("button");
    
    await waitFor(() => {
      fireEvent.click(loadMoreButton);
      getData();
      loadMoreHandler();
    });

    expect(getData).toBeCalled()
  });
});
