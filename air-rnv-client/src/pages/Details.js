import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";


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
    air_conditioned,
    photos,
    created_at,
    day_rate,
    description,
    id,
    length,
    location,
    name,
    occupancy,
    pet_friendly,
    rv_class,
    shower,
    tv,
    updated_at,
    user_id,
    year,
    reviews
  } = rvDetails;

  if (!isLoaded) return <h3>Loading...</h3>

  const renderReviews = reviews.map((review) => {
      const Arr = []

      for (let i = review.rating; i > 0; i--) {
        Arr.push("fa fa-star checked")
      }
      
      for (let i = (5 - review.rating); i > 0; i--) {
          Arr.push("fa fa-star-o")
        }

        const renderStars = Arr.map((starClass) => <span className={starClass}></span>)

        return (
          <ul key={review.id}> 
            <li>{renderStars}</li>
            <li>By: {review.user_name}</li>
            <li>{review.content}</li>
          </ul>
      )
  }
)
  
  return (
    <div>
      <h2 className="bubble-font ">{name}</h2>
      <ul>
        {renderReviews}
      </ul>
      <ImageCarousel photos={photos} />
      <h4>Name: {name}</h4>
      <h4>Length: {length}</h4>
      <h4>Day Rate: {day_rate}</h4>
      <h4>Description: {description}</h4>
      <h4>Air Conditioned{air_conditioned}</h4>
      <h4>Created At: {created_at}</h4>
      <h4>ID: {id}</h4>
      <h4>Location: {location}</h4>
      <h4>Occupancy: {occupancy}</h4>
      <h4>Pet Friendly: {pet_friendly}</h4>
      <h4>RV Class: {rv_class}</h4>
      <h4>Shower: {shower}</h4>
      <h4>TV: {tv}</h4>
      <h4>Updated At: {updated_at}</h4>
      <h4>User_id: {user_id}</h4>
      <h4>Year: {year}</h4>
    </div>
  );
}

export default Details;
