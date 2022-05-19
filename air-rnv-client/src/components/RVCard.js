import React from "react";
import Card from "react-bootstrap/Card";

function RVCard({ rv, showDetails }) {
  const {
    id,
    name,
    occupancy,
    location,
    year,
    summary,
    length,
    rv_class,
    dayRate,
    pet_friendly,
    airConditioned,
    shower,
    tv,
    image_url,
    user_id,
  } = rv;

  //   const showDetails = (id) => {
  //     fetch(`/rvs/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data)
  //     })
  //   };
  return (
    <Card style={{ width: "18rem" }} onClick={() => showDetails(id)}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{length}</Card.Text>
        <Card.Text>
          {pet_friendly ? <i class="fa fa-paw" aria-hidden="true" /> : null}
        </Card.Text>

        <Card.Text>{rv_class}</Card.Text>
        <Card.Text>{year}</Card.Text>
        <Card.Text>{shower}</Card.Text>
        <Card.Text>{tv}</Card.Text>

        {/* <Card.Image></Card.Image> */}
        <Card.Subtitle className="mb-2 text-muted">{occupancy}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
        {/* <Card.Link href="">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default RVCard;
