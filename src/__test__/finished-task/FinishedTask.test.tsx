import React from "react";
import { renderWithRedux } from "../../setupTests";
import FinishedTask from "../../components/finished-task/FinishedTask";

test("renders FinishedTask", () => {
  renderWithRedux(<FinishedTask />);
});
