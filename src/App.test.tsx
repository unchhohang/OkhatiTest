import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Welcome from "./Welcome";

test("render image in welcome page", () => {
  render(<Welcome />);
  const sarcasamImage = screen.getByRole("img");
  expect(sarcasamImage).toBeInTheDocument();
});
