import React from "react";
import RVCard from "../components/RVCard";

function Home({ rvList }) {
  const renderRvs = rvList.map((rv) => {
    console.log(rv);
    return <RVCard key={rv.id} rv={rv} />;
  });
  return (
    <div>
      <h6>RV List Page</h6>
      {renderRvs}
    </div>
  );
}

export default Home;
