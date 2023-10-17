import React from "react";
import { useAppSelector } from "../../redux/store/redux.store";
import Tasks from "../common/Tasks";
import noRenderImg from "../../assets/images/Nothing.png";

const FinishedTask = () => {
  const { tasks, selectedCategory } = useAppSelector((state) => state.todos);

  const renderedTask =
    selectedCategory === "All Categories"
      ? tasks
          .filter((task) => task.finished)
          .sort(
            (a, b) =>
              (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any),
          )
      : tasks
          .filter((task) => task.category === selectedCategory && task.finished)
          .sort(
            (a, b) =>
              (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any),
          );
  return (
    <div className={"td-container"}>
      <div className={"task-container"}>
        {renderedTask.length ? (
          <Tasks tasks={renderedTask} />
        ) : (
          <div className={"no-task"}>
            <img src={noRenderImg} alt="Nothing to render" />
            <p>No Finished task found for {selectedCategory} category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinishedTask;
