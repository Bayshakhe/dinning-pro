import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/authProvider/AuthProvider';

const Register = () => {
    const {user, createUser, updateUserProfile} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            updateUserProfile(name,photo)
            .then()
            .catch(error => console.log(error.message))
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
        
    }

    return (
        <Container style={{maxWidth: '500px'}}>
        <h3 className="text-center my-5"> Please Register!</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhotoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter Your Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <p className="mt-3"><small>Already have an account <Link to='/login'>Please Login</Link></small></p>
        </Form>
      </Container>
    );
};

export default Register;