import React from "react";
import { fireEvent } from "@testing-library/react";
import TaskForm from "../../components/todo/TaskForm";
import { renderWithRedux } from "../../setupTests";

describe("TaskForm", () => {
  // Initial form values
  const initialFormValues = {
    title: "Test Title",
    category: "Personal",
    description: "Test Description",
  };

  const handleSubmitMock = jest.fn();
  const handleChangeMock = jest.fn();

  it("renders with initial values and calls handleSubmit on form submit", () => {
    const initialState = {
      todos: {
        tasks: [],
        categories: ["Default", "Personal", "Shopping"],
        selectedCategory: "All Categories",
      },
    };

    // Render the TaskForm component
    const { getByLabelText, getByText } = renderWithRedux(
      <TaskForm
        formValues={initialFormValues}
        handleSubmit={handleSubmitMock}
        handleChange={handleChangeMock}
        btnTxt="Submit"
      />,
      initialState,
    );

    // Assert that the form fields are rendered with initial values
    expect((getByLabelText("Task Name*") as HTMLInputElement).value).toBe(
      "Test Title",
    );
    expect((getByLabelText("Category*") as HTMLInputElement).value).toBe(
      "Personal",
    );
    expect((getByLabelText("Description") as HTMLInputElement).value).toBe(
      "Test Description",
    );

    fireEvent.click(getByText("Submit"));

    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it("Opens CreateCategory modal on button click", () => {
    const { getByTestId, getByText, queryByText } = renderWithRedux(
      <TaskForm
        formValues={initialFormValues}
        handleSubmit={handleSubmitMock}
        handleChange={handleChangeMock}
        btnTxt="Submit"
      />,
    );

    expect(queryByText("Create New Category")).toBeNull();

    fireEvent.click(getByTestId("open-create-category-modal"));

    expect(getByText("Create New Category")).toBeInTheDocument();
  });
});
