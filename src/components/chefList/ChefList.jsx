import React from "react";
import { BiLike, BiBriefcase } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

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
          <h5 className="card-title fw-bold fs-4">{name}</h5>
          <p className="fw-semibold">
            <BiBriefcase className="me-2"></BiBriefcase>
            {experience} of Experience
            <br />
            <GiKnifeFork className="me-2"></GiKnifeFork>
            {numberOfRecipe} most popular Recipe
            <br />
            <span className="text-danger fs-5 d-flex align-items-center">
              <BiLike className="me-2"></BiLike>
              {likes}
            </span>
          </p>
        </div>
        <Link to={`/chef/${id}`}>
          <button className="btn btn-dark">View Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefList;
