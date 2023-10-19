import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { renderWithRedux } from "./setupTests";

test("renders learn react link", () => {
  renderWithRedux(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText(
    /YOu have No work today! Enjoy your day!/i,
  );
  expect(linkElement).toBeInTheDocument();
});
