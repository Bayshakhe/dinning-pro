import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
        <Container className="min-vh-100">
          <Banner></Banner>
        </Container>
  );
};

export default Home;
