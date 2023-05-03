import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";

const ChefList = ({ chefData }) => {
  const {
    id,
    name,
    image,
    description,
    experience,
    likes,
    numberOfRecipe,
    rating,
    recipes,
  } = chefData;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          style={{ height: "300px" }}
          src={image}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title fs-4">{name}</h5>
          <p className="card-text">
            Experience: {experience}
            <br />
            Recipe: {numberOfRecipe}
            <br />
            Likes: {likes}
          </p>
        </div>
        <button className="btn btn-danger">View Details</button>
      </div>
    </div>
  );
};

export default ChefList;
