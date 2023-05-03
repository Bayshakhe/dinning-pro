import React from "react";
import Marquee from "react-fast-marquee";

const PopularDishes = () => {
  return (
    <Marquee>
      <img style={{height:'200px'}} src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt="" />
      <img style={{height:'200px'}} src="https://cookingchew.com/wp-content/uploads/2022/06/American-Foods-min.jpg" alt="" />
      <img style={{height:'200px'}} src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/E2eMk0YPR.png?output-format=jpg" alt="" />
      <img style={{height:'200px'}} src="https://www.bespoqe.com/sites/default/files/styles/ridimensionata_per_colonna/public/spaghetti.jpg?itok=bn3u2eXo" alt="" />
      <img style={{height:'200px'}} src="https://travelfoodatlas.com/wp-content/uploads/2019/05/twinkies.jpg" alt="" />
    </Marquee>
  );
};

export default PopularDishes;
