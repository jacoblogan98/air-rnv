import React, { useState } from "react";
import RVCard from "../components/RVCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterModal from "../components/FilterModal";

function Home({ rvList, handleCardClick }) {
  const [showModal, setShowModal] = useState(false);

  const renderRvs = rvList.map((rv) => {
    // console.log(rv);
    return <RVCard key={rv.id} rv={rv} handleCardClick={handleCardClick} />;
  });

  return (
    <Container fluid>
      <button
        onClick={() => setShowModal(!showModal)}
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch modal
      </button>

      {showModal ? <FilterModal /> : null}
      <Row xs={1} sm={2} md={3} lg={4}>
        {renderRvs}
      </Row>
    </Container>
  );
}

export default Home;
