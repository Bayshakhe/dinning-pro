import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, Image} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error.message));
  };
  return (
    <Container>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-3">
            <span className="fw-bold text-danger">Dining</span> Pro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
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
            {user ? (
              <>
                {/* <img style={{width: '100px'}} src={user.photoURL} alt="" /> */}
                <Image className="me-2" style={{width: '40px'}} src={user.photoURL} roundedCircle title={user.displayName}/>
                <Link to="/login">
                  <Button onClick={logout} variant="btn btn-danger">
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <Button variant="btn btn-danger">Login</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
