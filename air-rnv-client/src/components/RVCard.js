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
        <Card.Image>{image_url}</Card.Image>
        <Card.Subtitle className="mb-2 text-muted">{occupancy}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
        {/* <Card.Link href="">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default RVCard;
