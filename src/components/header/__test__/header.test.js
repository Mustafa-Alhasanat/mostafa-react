import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "components/header";
import App from "page/app";

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

describe("Testing the header", () => {
  beforeEach(() => {
    render(
      <Header
        searchIsOpened={false}
        changeSearchIconState={jest.fn()}
        searchFieldRef={{ current: { focus: () => {} } }}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the logo image", () => {
    const imgElement = screen.getByAltText("desktop logo");
    expect(imgElement.attributes.getNamedItem("alt").value).toBe(
      "desktop logo"
    );
  });

  it("displays the movies list on hovering", async () => {
    const moviesTabElement = await screen.findByTestId("Movies");
    fireEvent.mouseEnter(moviesTabElement);

    const listItem = await screen.findByTestId("Movies-Popular");
    fireEvent.mouseLeave(moviesTabElement);

    expect(listItem.textContent).toBe("Popular");
  });

  it("display the three bars button on mobile devices", () => {
    resizeWindow(700, 700);
    const threeBarsButton = screen.getByTestId("three bars button");

    expect(threeBarsButton).toBeDefined();
  });

  it("displays left drawer on clicking the three bars button", () => {
    resizeWindow(700, 700);
    const threeBarsButton = screen.getByTestId("three bars button");

    fireEvent.click(threeBarsButton);

    const leftDrawer = screen.getByTestId("left drawer");

    expect(leftDrawer).toBeDefined();
  });

  it("moves the header up/down on scrolling", async () => {
    render(<App />);

    waitFor(() => {
      global.scrollY = 300;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(global.scrollY).toBe(300);

    waitFor(() => {
      global.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(global.scrollY).toBe(100);
  });

  it("displays the search area on clicking the search button", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");

    const searchButton = screen.getByTestId("search button");

    expect(setTimeout).not.toBeCalled();

    fireEvent.click(searchButton);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);

    jest.runAllTimers();
  });
});
