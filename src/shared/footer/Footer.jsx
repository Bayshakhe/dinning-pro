import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook,FaEnvelope,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <Container className='py-4 d-flex justify-content-between align-items-center'>
                <p className='m-0'>All &copy;Right Reserved by Dining Pro</p>
                <div>
                    <FaFacebook></FaFacebook>
                    <FaEnvelope className='mx-3'></FaEnvelope>
                    <FaTwitter></FaTwitter>
                </div>
            </Container>
        </div>
    );
};

export default Footer;