import React from "react";
import { renderWithRedux } from "../../setupTests";
import Tasks from "../../components/common/Tasks";
import { fireEvent } from "@testing-library/react";

describe("Task", () => {
  const tasks = [
    {
      id: 1,
      title: "Task One",
      category: "Work",
      description: "Complete project report",
      finished: false,
      created_at: "2023-10-17T12:30:00Z",
      updated_at: "2023-10-17T14:45:00Z",
    },
    {
      id: 2,
      title: "Task Two",
      category: "Personal",
      description: "Buy groceries",
      finished: true,
      created_at: "2023-10-18T09:00:00Z",
      updated_at: "2023-10-18T09:30:00Z",
    },
    {
      id: 3,
      title: "Task Three",
      category: "Default",
      description: "Review emails",
      finished: false,
      created_at: "2023-10-19T15:20:00Z",
      updated_at: "2023-10-19T16:00:00Z",
    },
  ];

  it("renders tasks correctly.", () => {
    const { getByText } = renderWithRedux(<Tasks tasks={tasks} />);
    tasks.forEach((task) => {
      const taskTitle = getByText(task.title);
      expect(taskTitle).toBeInTheDocument();

      const taskDescription = getByText(task.description);
      expect(taskDescription).toBeInTheDocument();
    });
  });

  it("opens EditTask modal on button click", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(
      <Tasks tasks={tasks} />,
    );
    expect(queryByTestId("task-form")).toBeNull();

    fireEvent.click(getByTestId("open-edit-task-modal-0"));

    expect(getByTestId("task-form")).toBeInTheDocument();
  });
});
