import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Details() {
  const [rvDetails, setRvDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const params = useParams()

  useEffect(() => {
    fetch(`/rvs/${params.id}`)
    .then(resp => resp.json())
    .then((rvData) => {
      console.log(rvData)
      setRvDetails(rvData)
      setIsLoaded(true)
    })
  }, [params.id])

  const {
    photos,
    name,
    location,
    day_rate,
    occupancy,
    description,
    air_conditioned,
    pet_friendly,
    shower,
    tv,
    year,
    length,
    rv_class,
    reviews
  } = rvDetails;

  if (!isLoaded) return <h3>Loading...</h3>

  const renderReviews = reviews.map((review) => {
    const Arr = []

    for (let i = review.rating; i > 0; i--) {
      Arr.push("fa fa-star checked text-maple")
    }
    
    for (let i = (5 - review.rating); i > 0; i--) {
      Arr.push("fa fa-star-o text-maple")
    }

    const renderStars = Arr.map((starClass, i) => <span key={i} className={starClass}></span>)

    return (
      <Col>
        <Card
        key={review.id}
        style={{ width: '18rem' }}
        className="mb-3 mx-auto"
        >
          <Card.Header className="bg-sand">{renderStars}</Card.Header>
          <Card.Body>
            <Card.Title>{review.user_name}</Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
    )
  })
  
  return (
    <Container>
      <Row className="w-75 ms-2">
        <Col className="col-sm-4 col-xs-3 col-md-5 col-lg-3 pe-0 mx-auto">
          <h2 className="mt-2 fw-light fs-1">The {name}</h2>
        </Col>
        <Col className="col-1 me-0 pe-0 my-auto justify-content-center">
          <span className="fs-1">•</span>
        </Col>
        <Col className="col-md-4 col-sm-5 my-auto">
          <p className="fs-5 fw-lighter ms-0 mt-3">{location}</p>
        </Col>
      </Row>

      <ImageCarousel photos={photos} />
      <h4>Day Rate: {day_rate}</h4>
      <h4>Occupancy: {occupancy}</h4>
      <h4>Description: {description}</h4>

      <h4>Air Conditioned{air_conditioned}</h4>
      <h4>Pet Friendly: {pet_friendly}</h4>
      <h4>Shower: {shower}</h4>
      <h4>TV: {tv}</h4>
      
      <h4>Year: {year}</h4>
      <h4>Length: {length}</h4>
      <h4>RV Class: {rv_class}</h4>
      <Container className="mb-4 ">
        <Row className="justify-content-around">
          {renderReviews}
        </Row>
      </Container>
    </Container>
  );
}

export default Details;
