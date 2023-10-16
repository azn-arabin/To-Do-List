import React from "react";
import { message, Modal } from "antd";
import TaskForm from "./TaskForm";
import { useAppDispatch } from "../../redux/store/redux.store";
import { createTask, TaskData } from "../../redux/actions/task.action";

interface CreateTaskProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ modal, setModal }) => {
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const formValues = { title: "", priority: "", category: "", description: "" };
  const handleSubmit = (values: TaskData) => {
    dispatch(createTask(values));
    setModal(false);
    messageApi.info("Successfully Created a new Task!");
  };

  return (
    <>
      {contextHolder}
      <Modal
        centered
        open={modal}
        footer={null}
        onCancel={() => setModal(false)}
        title={"Create New Task"}
      >
        <TaskForm formValues={formValues} handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default CreateTask;
