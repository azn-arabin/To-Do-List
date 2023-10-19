import React from "react";
import { renderWithRedux } from "../../setupTests";
import CreateTask from "../../components/todo/CreateTask";
import { fireEvent } from "@testing-library/react";
import { useAppDispatch } from "../../redux/store/redux.store"; // Make sure to import your action

jest.mock("../../redux/store/redux.store", () => ({
  ...jest.requireActual("../../redux/store/redux.store"),
  useAppDispatch: jest.fn(),
}));

describe("CreateTask", () => {
  const initialState = {
    todos: {
      tasks: [],
      categories: ["Default", "Personal", "Shopping"],
      selectedCategory: "All Categories",
    },
  };

  it("Verify correct updating of task form values and modal closure on valid form input.", () => {
    const dispatchMock = jest.fn(); // Mock the dispatch function
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock); // Set the mock dispatch function
    const mockedSetState = jest.fn();

    const { getByLabelText, getByText, getByTestId } = renderWithRedux(
      <CreateTask modal={true} setModal={mockedSetState} />,
      initialState,
    );

    expect(getByText("Task Name*")).toBeInTheDocument();

    fireEvent.change(getByLabelText("Task Name*"), {
      target: { value: "New Title" },
    });

    fireEvent.change(getByLabelText("Category*"), {
      target: { value: "Shopping" },
    });

    fireEvent.change(getByLabelText("Description"), {
      target: { value: "New Description" },
    });

    fireEvent.click(getByTestId("create-task-submit-btn"));
    expect(mockedSetState).toHaveBeenCalledWith(false);
  });
});
