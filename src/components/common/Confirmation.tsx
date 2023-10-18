import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ConfirmationProps {
  modal: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  onConfirm: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  modal,
  handleClose,
  message,
  onConfirm,
}) => {
  return (
    <Modal show={modal} onHide={() => handleClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(false)}>
          Cancel
        </Button>
        <Button className={"btn-grad confirm-btn"} onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
