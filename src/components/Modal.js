import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function ModalPop(props) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">{props.button1}</Button>
        <Button variant="primary">{props.button2}</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
