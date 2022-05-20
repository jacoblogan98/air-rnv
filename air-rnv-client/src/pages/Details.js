import React from "react";
import { useHistory } from "react-router-dom";

function Details({ showDetails, currentDetails }) {
  const history = useHistory();

  const {
    air_conditioned,
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
  } = currentDetails;

  return (
    <div>
      <h2>Details Page</h2>
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
