import React from "react";
import ModalForm from "./ModalForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";

function FilterModal({ showModal, setShowModal }) {
  return (

    <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Filter RV's
        </Modal.Title>
        <CloseButton onClick={() => setShowModal(false)} />
      </Modal.Header>
      <Modal.Body>
        <ModalForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Filter</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
