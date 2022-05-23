import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";
import Review from "../components/Review"
import ImageCarousel from "../components/ImageCarousel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Details() {
  const [rvDetails, setRvDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [reviewList, setReviewList] = useState()
  const params = useParams()
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

  
  const showerText = shower ? "Yes" : "No";
  const tvText = tv ? "Yes" : "No";
  const petText = pet_friendly ? "Yes" : "No";
  const acText = air_conditioned ? "Yes" : "No"

  useEffect(() => {
    fetch(`/rvs/${params.id}`)
      .then(resp => resp.json())
      .then((rvData) => {
        setRvDetails(rvData)
        setIsLoaded(true)
      })
  }, [params.id, reviewList])


  if (!isLoaded) return <h3>Loading...</h3>
  console.log(reviewList)
  const renderReviews = reviews.map((review) => <Review setReviewList={setReviewList} allReviews={reviews} instanceReview={review} />)



  return (
    <Container>
      <Row className="dw-75 ms-2">
        <Col className="col-sm-4 col-xs-3 col-md-5 col-lg-3 pe-0 mx-auto">
          <h2 className="mt-2 fw-light fs-1">The {name}</h2>
        </Col>
        {/* <Col className="col-1 me-0 pe-0 my-auto justify-content-center">
          <span className="fs-1">•</span>
        </Col> */}
        <Col className="col-md-4 col-sm-5 my-auto">
          <p className="fs-5 fw-lighter ms-0 mt-3">{location}</p>
        </Col>
      </Row>

      <ImageCarousel className="border border-dark" photos={photos} />
      <h4 className="text-center">{description}</h4>
      <br/>
      <br/>
      <h3 className="mt-2 fw-light fs-1">Logistics</h3>
      <Row className="text-center">
        <Col >        
        <h5>Sleeps: {occupancy}</h5>
        <h5>${day_rate}/night</h5>
        </Col>
        <Col>        
        <h5> {year} {rv_class} </h5>
        <h5>Length: {length}'</h5>
        </Col>
      </Row>
      <h5 className="mt-2 fw-light fs-1"> Amenities</h5>
      <Row className="text-center">
        <Col>
        <h5>Air Conditioned? {acText}</h5>
        <h5>Pet Friendly? {petText}</h5>
        </Col>
        <Col>
        <h5>Shower? {showerText}</h5>
        <h5>TV? {tvText}</h5>
        </Col>
      </Row>

      <Container className="mb-4 ">
        <h2 className="text-center">Reviews</h2>
        <Row className="justify-content-around">
        {renderReviews}
        </Row>
        <h2 className="text-center">Leave a Review!</h2>
        <AddReviewForm reviewList={reviewList} setReviewList={setReviewList} data={rvDetails} />
      </Container>
    </Container>
  );
}

export default Details;
