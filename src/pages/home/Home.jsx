import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefList from "../../components/chefList/ChefList";
import PopularDishes from "../../components/popularDishes/PopularDishes";

const Home = () => {
  const allChefData = useLoaderData();
  // console.log(allChefData)
  return (
    <Container className="min-vh-100">
      <Banner></Banner>
      <h3 className="text-center fw-bold mt-5 mb-4 py-3 text-danger text-decoration-underline">Let's Meet The Experts</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        {allChefData.map((chefData) => (
          <ChefList key={chefData.id} chefData={chefData}></ChefList>
        ))}
      </div>
      <div>
      <h3 className="text-center fw-bold mt-5 mb-4 py-3 text-danger text-decoration-underline">Popular Dishes</h3>
        <PopularDishes></PopularDishes>
      </div>
    </Container>
  );
};

export default Home;
