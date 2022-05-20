import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function RVCard({ rv, showDetails }) {
  const {
    id,
    name,
    occupancy,
    location,
    year,
    description,
    length,
    rv_class,
    day_rate,
    pet_friendly,
    air_conditioned,
    shower,
    tv,
    image,
    user_id,
  } = rv;

  return (
    <Col>
      <Card onClick={() => showDetails(id)} role="button">
        <Card.Body>
          <Card.Img 
          variant="top" 
          src={image} 
          className="mb-3 image_card"
          />
          <Card.Title>The {name}.</Card.Title>

          <Card.Text className="small my-1">Rate: ${day_rate} /night</Card.Text>
          <Card.Text className="small my-1">Location: {location}</Card.Text>
          <Card.Text className="small my-1">Sleeps: {occupancy}</Card.Text>
          
          <Row className="pb-3 d-flex align-content-center" >
            {pet_friendly
              ? <Col>
                  <Card.Text>
                    <i className="fa fa-paw" aria-hidden="true" />
                  </Card.Text>
                </Col>
              : null
              }
            {shower 
              ? <Col>
                  <Card.Text> <i className="fa fa-shower" aria-hidden="true" /></Card.Text>  
                </Col>
              : null
              }
            {tv 
              ? <Col>
                  <Card.Text>{tv ? <i className="fa fa-television" aria-hidden="true" /> : null}</Card.Text>
                </Col>
              : null
              }
            {air_conditioned
            ? <Col>
                <Card.Text>{air_conditioned ? <i className="fa fa-snowflake-o" aria-hidden="true" /> : null}</Card.Text>
              </Col>
             : null}
          </Row>

          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RVCard;
