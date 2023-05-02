import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <Container style={{maxWidth: '500px'}}>
        <h3 className="text-center my-5"> Please Login!</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div className="d-flex gap-2 mt-4">
          <button className="btn btn-outline-primary w-100">
          Login with Google
          </button>
          <button className="btn btn-outline-primary w-100">
          Login with Github
          </button>
          </div>
          <p className="mt-3"><small>Don't have an account <Link to='/register'>Please Register</Link></small></p>
        </Form>
      </Container>
  );
};

export default Login;
