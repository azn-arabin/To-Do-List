import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface CategoryFormProps {
  name: string;
  handleSubmit: () => void;
  handleChange: (value: string) => void;
  btnTxt: string;
  titleTxt: string;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CategoryForm: React.FC<CategoryFormProps> = (props) => {
  const [validated, setValidated] = useState(false);

  const handleFromSubmit = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      props.handleSubmit();
    }

    setValidated(true);
  };
  return (
    <Modal show={props.modal} onHide={() => props.setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.titleTxt}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          className={"form-container"}
          onSubmit={handleFromSubmit}
        >
          <Form.Group controlId="validationCustom01">
            <Form.Label>Category Name*</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={props.name}
              onChange={(e) => props.handleChange(e.target.value)}
              placeholder="Category name..."
              maxLength={13}
            />
            <Form.Control.Feedback type={"invalid"}>
              Please enter category name.
            </Form.Control.Feedback>
          </Form.Group>
          <button
            type={"submit"}
            className={"btn-grad"}
            style={{ marginTop: "10px" }}
          >
            <FontAwesomeIcon icon={faPlus} /> {props.btnTxt}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryForm;
