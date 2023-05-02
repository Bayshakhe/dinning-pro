import React from "react";
import Header from "../../shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-vh-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
