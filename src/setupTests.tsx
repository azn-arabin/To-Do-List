import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { AppState } from "./redux/reducers/task.reducer";

const mockStore = configureStore([]);

interface TodoState {
  todos: AppState;
}

export const renderWithRedux = (
  ui: React.ReactElement,
  initialState?: Partial<TodoState>,
) => {
  const store = mockStore({
    todos: {
      tasks: [],
      categories: ["Default", "Personal", "Shopping"],
      selectedCategory: "All Categories",
      ...initialState?.todos,
    },
  });

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
