import React from "react";
import Card from "react-bootstrap/Card";

function RVCard({ rv }) {
  const {
    name,
    occupancy,
    location,
    year,
    summary,
    length,
    rv_class,
    dayRate,
    petFriendly,
    airConditioned,
    shower,
    tv,
    image_url,
    user_id,
  } = rv;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{length}</Card.Text>
        <Card.Text>{`Pet friendly: ${
          petFriendly === true ? "Yes!" : "No..."
        }`}</Card.Text>
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
