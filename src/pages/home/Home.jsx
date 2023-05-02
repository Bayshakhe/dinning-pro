import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../shared/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../shared/footer/Footer";

const Home = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <div className="min-vh-100">
          <Banner></Banner>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
