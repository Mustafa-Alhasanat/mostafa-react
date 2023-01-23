import { render, screen } from "@testing-library/react";
import Footer from "components/footer";

describe("testing the footer component", () => {
  it("renders the button in the footer", async () => {
    render(<Footer />);
    const buttonElement = screen.getByText("Hi User!");
    expect(buttonElement.textContent).toBe("Hi User!");
  });
});
