import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const chefdata = useLoaderData();
    console.log(chefdata)
    return (
        <div>
            RecipeDetails
        </div>
    );
};

export default RecipeDetails;