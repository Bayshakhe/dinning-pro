import React from 'react';
import Header from '../../shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';

const RecipeDetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetailsLayout;