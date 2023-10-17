import React, { useState } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTask from "../perform-task/CreateTask";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/store/redux.store";
import Tasks from "../common/Tasks";
import Tooltip from "../common/Tooltip";
import noRenderImg from "../../assets/images/Nothing.png";
import noTaskImg from "../../assets/images/No_work_today.png";

const Home: React.FC = () => {
  const [addModal, setAddModal] = useState(false);
  const { tasks, selectedCategory } = useAppSelector((state) => state.todos);

  const renderedTask =
    selectedCategory === "All Categories"
      ? tasks
          .filter((task) => !task.finished)
          .sort(
            (a, b) =>
              (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any),
          )
      : tasks
          .filter(
            (task) => task.category === selectedCategory && !task.finished,
          )
          .sort(
            (a, b) =>
              (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any),
          );

  return (
    <div className={"td-container"}>
      <div className={"task-container"}>
        {tasks.length ? (
          renderedTask.length ? (
            <Tasks tasks={renderedTask} />
          ) : (
            <div className={"no-task"}>
              <img src={noRenderImg} alt="Nothing to render" />
              <p>No task found for {selectedCategory} category.</p>
            </div>
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

export default Home;
