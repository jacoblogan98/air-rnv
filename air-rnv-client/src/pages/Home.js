import React, { useState, useEffect } from "react";
import RVCard from "../components/RVCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterModal from "../components/FilterModal";
import Button from "react-bootstrap/esm/Button";

function Home({ handleCardClick }) {
  const [showModal, setShowModal] = useState(false);
  const [rvList, setRvList] = useState([]);
  const [rvSearch, setRvSearch] = useState("");

  useEffect(() => {
    fetch("/rvs")
      .then((res) => res.json())
      .then((data) => setRvList(data));
  }, []);

  const handleChange = (e) => {
    setRvSearch(e.target.value);
    console.log("search value:", rvSearch);
  };

  const filteredList = rvList.filter((listing) =>
    listing.location.toLowerCase().includes(rvSearch.toLowerCase())
  );

  const renderRvs = filteredList.map((rv) => {
    return <RVCard key={rv.id} rv={rv} handleCardClick={handleCardClick} />;
  });

  return (
    <Container fluid>
      <FilterModal showModal={showModal} setShowModal={setShowModal}/>
      <Button onClick={() => setShowModal(true)} id="btn-olive">
        Launch modal
      </Button>
      <input onChange={e => handleChange(e)} /> Search
      <Row xs={1} sm={2} md={3} lg={4}>
        {renderRvs}
      </Row>
    </Container>
  );
}

export default Home;
