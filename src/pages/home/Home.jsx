import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefList from "../../components/chefList/ChefList";

const Home = () => {
  const allChefData = useLoaderData();
  // console.log(allChefData)
  return (
    <Container className="min-vh-100">
      <Banner></Banner>
      <h3 className="text-center fw-bold my-5 py-3">Let's Meet The Experts</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {allChefData.map((chefData) => (
          <ChefList key={chefData.id} chefData={chefData}></ChefList>
        ))}
      </div>
    </Container>
  );
};

export default Home;
