import React from "react";
import { renderWithRedux } from "../../setupTests";
import CategoryList from "../../components/category/CategoryList";

describe("CategoryList", () => {
  const initialState = {
    todos: {
      tasks: [],
      categories: ["Default", "Personal", "Shopping"],
      selectedCategory: "All Categories",
    },
  };

  const { getByText } = renderWithRedux(<CategoryList />, initialState);
  it("renders categories correctly", () => {
    initialState.todos.categories.forEach((category) => {
      const categoryElement = getByText(category);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
