import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";

function FilterModal({ showModal, setShowModal }) {
  return (

    <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
    
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
        <CloseButton onClick={() => setShowModal(false)} />
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Filter</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
