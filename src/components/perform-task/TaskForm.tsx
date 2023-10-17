import React, { useState } from "react";
import "../../styles/perform-task.css";
import Form from "react-bootstrap/Form";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../redux/store/redux.store";
import CreateCategory from "../category/CreateCategory";

interface TaskFromProps {
  formValues: {
    title: string;
    category: string;
    description: string;
  };
  handleSubmit: () => void;
  handleChange: (e: any) => void;
  btnTxt: string;
}
const TaskForm: React.FC<TaskFromProps> = ({
  formValues,
  handleSubmit,
  handleChange,
  btnTxt,
}) => {
  const [validated, setValidated] = useState(false);
  const categories = useAppSelector((state) => state.todos.categories);
  const [crCategoryModal, setCrCategoryModal] = useState(false);

  const handleFromSubmit = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleSubmit();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      className={"form-container"}
      onSubmit={handleFromSubmit}
    >
      <Form.Group controlId="validationCustom01">
        <Form.Label>Task Name*</Form.Label>
        <Form.Control
          required
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          placeholder="Task name..."
          maxLength={50}
        />
        <Form.Control.Feedback type={"invalid"}>
          Please enter task name.
        </Form.Control.Feedback>
      </Form.Group>
      <div className={"form-category"}>
        <Form.Group controlId={"validation3"}>
          <Form.Label>Category*</Form.Label>
          <Form.Select
            aria-label="select"
            defaultValue={formValues.category}
            onChange={handleChange}
            name={"category"}
          >
            {categories.map((category, id) => (
              <option value={category} key={id}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <button
          type={"button"}
          className={"btn-grad ctg-btn"}
          onClick={() => setCrCategoryModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} /> New
        </button>
      </div>
      <Form.Group controlId="validationCustom02">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="A short description of your task..."
          style={{ height: "90px" }}
          maxLength={200}
        />
      </Form.Group>
      <button
        type={"submit"}
        className={"btn-grad"}
        style={{ marginTop: "10px" }}
      >
        <FontAwesomeIcon icon={faPlus} /> {btnTxt}
      </button>
      <CreateCategory modal={crCategoryModal} setModal={setCrCategoryModal} />
    </Form>
  );
};

export default TaskForm;
