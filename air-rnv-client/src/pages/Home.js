import React from "react";
// import RVCard from "../components/RVCard";
// import Card from "react-bootstrap/Card";
import RvList from "./RvList";

function Home({ rvList }) {
  //   const renderRvs = rvList.map((rv) => {
  //     console.log(rv);
  //     return <RVCard key={rv.id} rv={rv} />;
  //   });
  return (
    <div>
      <RvList rvList={rvList} />
      {/* {renderRvs} */}
    </div>
  );
}

export default Home;
