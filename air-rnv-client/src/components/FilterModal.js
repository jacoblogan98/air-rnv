import React from "react";
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
        <h4>Centered Modal</h4>
        <form>
          {/* >>>>>>>>>> Prices <<<<<<<<<< */}
          <div className="prices-data">
            <h5>Price</h5>
            <div>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
              />
            </div>
            <input type="text" placeholder="$ min" />
            <input type="text" placeholder="$ max" />
          </div>
          <br />
          {/* >>>>>>>>>> Class - Radio Buttons <<<<<<<<<< */}
          <h5>Class</h5>
          <div className="class-data">
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                value=""
                name="pet_friendly"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Class: A
              </label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                value=""
                name="pet_friendly"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Class: B
              </label>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                value=""
                name="pet_friendly"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Class: C
              </label>
            </div>
          </div>
          <br />
          {/* >>>>>>>>>> Boolean Values <<<<<<<<<< */}
          <h5>Amenities</h5>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="pet_friendly"
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              Pet Friendly
            </label>
          </div>
          {/* Air Conditioned */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="air_conditioned"
              id="defaultCheck2"
            />
            <label className="form-check-label" for="defaultCheck2">
              Air Conditioned
            </label>
          </div>
          {/* TV */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="air_conditioned"
              id="defaultCheck2"
            />
            <label className="form-check-label" for="defaultCheck2">
              TV
            </label>
          </div>
          {/* Air Conditioned */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="air_conditioned"
              id="defaultCheck2"
            />
            <label className="form-check-label" for="defaultCheck2">
              Air Conditioned
            </label>
          </div>
          {/* Shower */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="shower"
              id="defaultCheck2"
            />
            <label className="form-check-label" for="defaultCheck2">
              Shower
            </label>
          </div>
          <br />
          {/* >>>>>>>>>> Other Basics <<<<<<<<<< */}
          <h5>Misc.</h5>
          <input type="text" placeholder="Year"></input>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Filter</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
