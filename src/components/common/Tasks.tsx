import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Task } from "../../redux/reducers/task.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/store/redux.store";
import { deleteTask, updateTask } from "../../redux/actions/task.action";
import { toast } from "react-toastify";
import Tooltip from "./Tooltip";
import EditTask from "../perform-task/EditTask";

interface TaskProps {
  tasks: Task[];
}
const Tasks: React.FC<TaskProps> = ({ tasks }) => {
  const [editModal, setEditModal] = useState(false);
  const [editTask, setEditTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    created_at: "",
    updated_at: "",
    finished: false,
    category: "",
  });
  const dispatch = useAppDispatch();

  return (
    <div className={"tasks"}>
      {tasks.map((task, id) => (
        <div className={"task"} key={id}>
          <Form.Check
            type="checkbox"
            id="custom-checkbox"
            checked={task.finished}
            onChange={() => {
              dispatch(
                updateTask({
                  ...task,
                  finished: !task.finished,
                  updated_at: new Date().toISOString(),
                }),
              );
              toast.success(
                `Ths task ${task.title} is marked as ${
                  task.finished ? "Undone" : "Done"
                }`,
                {
                  theme: "colored",
                  position: toast.POSITION.BOTTOM_RIGHT,
                },
              );
            }}
            className={"checkbox"}
          />
          <div className={"t-titles"}>
            <div className={"main-title"}>
              <h5>{task.title}</h5>
              <div className={"category"}>
                <FontAwesomeIcon icon={faClipboard} />
                {task.category}
              </div>
            </div>
            <p>{task.description}</p>
          </div>
          <div className={"icon-container"}>
            <Tooltip tooltip={"Edit Task"} placement={"left"}>
              <div
                className={"edit-icon"}
                onClick={() => {
                  setEditTask(task);
                  setEditModal(true);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
            </Tooltip>
            <Tooltip tooltip={"Delete Task"} placement={"left"}>
              <div
                className={"delete-icon"}
                onClick={() => {
                  toast.success(`Successfully deleted the ${task.title} task`, {
                    theme: "colored",
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                  dispatch(deleteTask(task.id));
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </Tooltip>
          </div>
        </div>
      ))}
      <EditTask modal={editModal} setModal={setEditModal} task={editTask} />
    </div>
  );
};

export default Tasks;
