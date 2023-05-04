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
    <div className="col mb-3">
      <div className="card h-100">
        <img
          style={{ height: "300px" }}
          src={image}
          className="card-img-top"
          alt="Chef's Image"
        ></img>
        <div className="card-body">
          <h5 className="card-title fs-3 mb-3">{name}</h5>
          <p className="">
            <BiBriefcase className="me-2"></BiBriefcase>
            {experience} of Experience
            <br />
            <GiKnifeFork className="me-2"></GiKnifeFork>
            {numberOfRecipe} most popular Recipe
            <br />
            <span className="d-flex align-items-center">
              <BiLike className="me-2"></BiLike>
              {likes}
            </span>
          </p>
        </div>
        <button className="btn btn-danger">
          <Link  className="text-white text-decoration-none" to={`/chef/${id}`}>View Recipe</Link>
        </button>
      </div>
    </div>
  );
};

export default ChefList;
