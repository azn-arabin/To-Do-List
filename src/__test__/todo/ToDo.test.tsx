import React from "react";
import ToDo from "../../components/todo/ToDo";
import { renderWithRedux } from "../../setupTests";
import { fireEvent } from "@testing-library/react";

describe("ToDo", () => {
  it("renders Todo and opens CreateTask modal on button click", () => {
    const { getByTestId, getByText, queryByText } = renderWithRedux(<ToDo />);

    expect(queryByText("Create a Task")).toBeNull();

    fireEvent.click(getByTestId("open-create-task-modal"));

    expect(getByText("Create a Task")).toBeInTheDocument();
  });
});
