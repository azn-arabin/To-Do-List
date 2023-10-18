import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { useAppDispatch } from "../../redux/store/redux.store";
import { createTask } from "../../redux/actions/task.action";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

interface CreateTaskProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ modal, setModal }) => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    title: "",
    category: "Default",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(createTask(formValues));
    setModal(false);
    setFormValues({
      title: "",
      category: "Default",
      description: "",
    });
    toast.success("Successfully created a new task", {
      theme: "colored",
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <Modal show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm
          formValues={formValues}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          btnTxt={"Create Task"}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateTask;
