import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

it("rende il messaggio di benvenuto", () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText(/Benvenuti in EpiBooks!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
