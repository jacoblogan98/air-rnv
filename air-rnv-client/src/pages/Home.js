import React, { useState } from "react";
import RVCard from "../components/RVCard";
import Details from "./Details";
// import Card from "react-bootstrap/Card";

function Home({ rvList }) {
  const [displayDetails, setDisplayDetails] = useState(false);


  const renderRvs = rvList.map((rv) => {
    console.log(rv);
    return <RVCard key={rv.id} rv={rv}  />;
  });

  return <div>{renderRvs}</div>;
}

export default Home;
