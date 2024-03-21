import { render, screen } from "@testing-library/react";
import booksData from "../data/fantasy.json";
import App from "../App";

it("renders correct number of books", () => {
  render(<App />);
  const cards = screen.getAllByTestId("book-card");
  const numberOfBooksInJson = booksData.length;

  expect(cards.length).toBe(numberOfBooksInJson);
});
