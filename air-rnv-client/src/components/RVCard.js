import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



function RVCard({ rv }) {
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
    image_url,
    user_id,
  } = rv;

    const showDetails = (id) => {
      fetch(`/rvs/${id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
    };

  return (
    <Col >
      <Card
        onClick={() => showDetails(id)} 
        role="button" 
        >
        <Card.Body>
          <Card.Img 
          variant="top" 
          src="https://source.unsplash.com/random/500x500" 
          className="mb-3"
          />
          <Card.Title>The {name}.</Card.Title>
          <Card.Text>Rate: ${day_rate} /night</Card.Text>
          <Card.Text>Location: {location}</Card.Text>
          <Card.Text>Sleeps: {occupancy}</Card.Text>
          <Card.Text>Length: {length} ft</Card.Text>
          <Card.Text>Class: {rv_class}</Card.Text>
          <Card.Text>Year: {year}</Card.Text>
          
          <Row >
            <Col>
              <Card.Text>{pet_friendly ? <i class="fa fa-paw" aria-hidden="true" /> : <i class="fa fa-paw" aria-hidden="true" style={{display: "none"}}/>}
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>{shower ? <i class="fa fa-shower" aria-hidden="true" /> : <i class="fa fa-shower" aria-hidden="true" style={{display: "none"}}/>}</Card.Text>  
            </Col>
            <Col>
              <Card.Text>{tv ? <i class="fa fa-television" aria-hidden="true" /> : null}</Card.Text>
            </Col>
            <Col>
              <Card.Text>{air_conditioned ? <i class="fa fa-snowflake-o" aria-hidden="true" /> : null}</Card.Text>
            </Col>
          </Row>
          

          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
          {/* <Card.Link href="">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </Col>
    
  );
}

export default RVCard;
