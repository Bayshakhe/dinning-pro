import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/header/Header';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Banner></Banner>
        </Container>
    );
};

export default Home;