import React, { useState } from "react";
import RVCard from "../components/RVCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home({ rvList, showDetails }) {
  const [displayDetails, setDisplayDetails] = useState(false);

  const renderRvs = rvList.map((rv) => {
    console.log(rv);
    return <RVCard key={rv.id} rv={rv} showDetails={showDetails} />;
  });

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
        {renderRvs}
      </Row>
    </Container>
  );
}

export default Home;
