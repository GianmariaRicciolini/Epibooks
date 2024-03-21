import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

it("rende il messaggio di benvenuto", () => {
  render(<CommentArea />);
  const form = screen.getByPlaceholderText(/Inserisci qui il testo/i);
  expect(form).toBeInTheDocument();
});
