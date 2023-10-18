import React, { useEffect, useState } from "react";
import "../../styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTask from "./CreateTask";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/store/redux.store";
import Tasks from "../common/Tasks";
import Tooltip from "../common/Tooltip";
import noRenderImg from "../../assets/images/Nothing.png";
import noTaskImg from "../../assets/images/No_work_today.png";
import FilterTasks from "../common/FilterTasks";
import { Task } from "../../redux/reducers/task.reducer";

const ToDo: React.FC = () => {
  const [addModal, setAddModal] = useState(false);
  const { tasks, selectedCategory } = useAppSelector((state) => state.todos);
  const [renderedTask, setRenderedTask] = useState(tasks);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);

  useEffect(() => {
    const renTasks =
      selectedCategory === "All Categories"
        ? tasks
            .filter((task) => !task.finished)
            .sort(
              (a, b) =>
                (new Date(b.updated_at) as any) -
                (new Date(a.updated_at) as any),
            )
        : tasks
            .filter(
              (task) => task.category === selectedCategory && !task.finished,
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
        {tasks.length ? (
          renderedTask.length ? (
            <>
              <FilterTasks onChange={handleSearchChange} />
              <Tasks tasks={filteredTask} />
            </>
          ) : (
            <>
              <FilterTasks onChange={handleSearchChange} />
              <div className={"no-task"}>
                <img src={noRenderImg} alt="Nothing to render" />
                <p>No task found for {selectedCategory} category.</p>
              </div>
            </>
          )
        ) : (
          <div className={"no-task"}>
            <img src={noTaskImg} alt="Nothing to render" />
            <p>You have no work today! Enjoy your day!</p>
          </div>
        )}
        <Tooltip tooltip={"Add New Task"} placement={"top"}>
          <button
            className={"btn-grad add-button"}
            onClick={() => setAddModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Tooltip>
        <CreateTask modal={addModal} setModal={setAddModal} />
      </div>
    </div>
  );
};

export default ToDo;
