import React from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-3">
          <span className="fw-bold text-danger">Dining</span> Pro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive
                  ? "fw-bold me-3 text-danger"
                  : "text-decoration-none text-dark me-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/chef"
              className={({ isActive }) =>
                isActive
                  ? "fw-bold me-3 text-danger"
                  : "text-decoration-none text-dark me-3"
              }
            >
              Our Chef
            </NavLink>
            <NavLink
              to={`/extra1`}
              className={({ isActive }) =>
                isActive
                  ? "fw-bold me-3 text-danger"
                  : "text-decoration-none text-dark me-3"
              }
            >
              Extra1
            </NavLink>
            <NavLink
              to={`/extra2`}
              className={({ isActive }) =>
                isActive
                  ? "fw-bold me-3 text-danger"
                  : "text-decoration-none text-dark me-3"
              }
            >
              Extra2
            </NavLink>
            <NavLink
              to={`/blog`}
              className={({ isActive }) =>
                isActive
                  ? "fw-bold me-3 text-danger"
                  : "text-decoration-none text-dark me-3 "
              }
            >
              Blog
            </NavLink>
          </Nav>
          <Link to="/login">
            <Button variant="btn btn-danger">Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
