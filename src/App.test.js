import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button component", () => {
  render(<App />);
  const linkElement = screen.getByText(/explore more/i);
  expect(linkElement).toBeInTheDocument();
});
