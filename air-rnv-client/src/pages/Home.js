import React, { useState } from "react";
import RVCard from "../components/RVCard";
import Details from "./Details";
// import Card from "react-bootstrap/Card";

function Home({ rvList }) {
  const [displayDetails, setDisplayDetails] = useState(false);

  const showDetails = (id) => {
    fetch(`/rvs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplayDetails(!displayDetails);
      });
  };
  const renderRvs = rvList.map((rv) => {
    console.log(rv);
    return <RVCard key={rv.id} rv={rv} showDetails={showDetails} />;
  });

  return <div>{renderRvs}</div>;
}

export default Home;
