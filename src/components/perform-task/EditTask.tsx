import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store/redux.store";
import { Task } from "../../redux/reducers/task.reducer";
import { updateTask } from "../../redux/actions/task.action";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import TaskForm from "./TaskForm";

interface EditTaskProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  task: Task;
}
const EditTask: React.FC<EditTaskProps> = ({ modal, setModal, task }) => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    title: task.title,
    category: task.category,
    description: task.description,
  });

  useEffect(() => {
    setFormValues({
      title: task.title,
      category: task.category,
      description: task.description,
    });
  }, [task]);

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const updatedValue = {
      ...task,
      title: formValues.title,
      description: formValues.description,
      category: formValues.category,
      updated_at: new Date().toISOString(),
    };
    dispatch(updateTask(updatedValue));
    setModal(false);
    setFormValues({
      title: "",
      category: "Default",
      description: "",
    });
    toast.success("Successfully updated the task", {
      theme: "colored",
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <Modal show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm
          formValues={formValues}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          btnTxt={"Edit Task"}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditTask;
