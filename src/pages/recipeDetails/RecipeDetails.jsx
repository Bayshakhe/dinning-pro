import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'


const RecipeDetails = () => {
  const chefdata = useLoaderData();
  console.log(chefdata);
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
  } = chefdata;
  return (
    <Container>
      <Row xs={1} md={2} className="g-4 my-5">
        <Col>
          <Card>
            <Card.Body className="border-0">
              <Card.Title className="fs-3 text-danger text-decoration-underline">{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <p className="fw-semibold">
              Experience: {experience} 
                <br />
                Popular Recipe: {numberOfRecipe}
                <br />
                <span className="d-flex align-items-center">
                  Likes: {likes}
                </span>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card.Img variant="top" src={image} />
        </Col>
      </Row>
      <h4 className="text-center fw-bold mb-4">
          Most Popular Recipe
        </h4>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {
            recipes.map(r => 
                <Col  key={r.recipeName}>
                <Card >
            <Card.Img style={{height: '250px'}} variant="top" src={r.recipeImg} />
            <Card.Body>
                <div className="d-flex fs-5">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{rating}
                </div>
              <Card.Title className="text-danger">{r.recipeName}</Card.Title>
              <Card.Text className="mb-0 fw-bold">Ingredients: </Card.Text>
              {
                r.ingredients.map(ingre => <li key={ingre}>{ingre}</li>)
              }
            <Card.Text className="my-3"><span className="fw-bold">Cooking: <br /></span> {r.cooking}</Card.Text>
            </Card.Body>
          </Card>
                </Col>
            )
        }
      </Row>
    </Container>
  );
};

export default RecipeDetails;
