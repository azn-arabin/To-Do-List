import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store/redux.store";
import Tasks from "../common/Tasks";
import noRenderImg from "../../assets/images/Nothing.png";
import FilterTasks from "../common/FilterTasks";
import { Task } from "../../redux/reducers/task.reducer";

const FinishedTask = () => {
  const { tasks, selectedCategory } = useAppSelector((state) => state.todos);
  const [renderedTask, setRenderedTask] = useState(tasks);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);

  useEffect(() => {
    const renTasks =
      selectedCategory === "All Categories"
        ? tasks
            .filter((task) => task.finished)
            .sort(
              (a, b) =>
                (new Date(b.updated_at) as any) -
                (new Date(a.updated_at) as any),
            )
        : tasks
            .filter(
              (task) => task.category === selectedCategory && task.finished,
            )
            .sort(
              (a, b) =>
                (new Date(b.updated_at) as any) -
                (new Date(a.updated_at) as any),
            );
    setRenderedTask(renTasks);
    setFilteredTask(renTasks);
  }, [selectedCategory, tasks]);

  const handleSearchChange = (value: string) => {
    if (value) {
      const filtered = renderedTask.filter(
        (task) => task.title.toLowerCase().indexOf(value.toLowerCase()) > -1,
      );
      setFilteredTask(filtered);
    } else {
      setFilteredTask(renderedTask);
    }
  };
  return (
    <div className={"td-container"}>
      <div className={"task-container"}>
        <FilterTasks onChange={handleSearchChange} />
        {renderedTask.length ? (
          <Tasks tasks={filteredTask} />
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
