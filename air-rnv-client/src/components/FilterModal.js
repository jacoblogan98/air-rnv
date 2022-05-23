import React from "react";
import ModalForm from "./ModalForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";

function FilterModal({ filteredList, showModal, setShowModal }) {

  const handleFilter = (e) => {
    setShowModal(false)
    // grab checked values and use filteredList.filter to go through each item and compare it to the form state
    console.log(e)

  }

  return (

    <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="bg-sand">
        <Modal.Title id="contained-modal-title-vcenter" className="bubble-font text-maple"
        >
          Filter RV's
        </Modal.Title>
        <CloseButton onClick={() => setShowModal(false)} />
      </Modal.Header>
      <Modal.Body>
        <ModalForm filteredList={filteredList}/>
      </Modal.Body>
      <Modal.Footer className="bg-sand">
        <Button id="btn-olive" onClick={(e) => handleFilter(e)}>Filter</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
