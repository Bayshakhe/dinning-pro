import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel className="">
      <Carousel.Item interval={2000}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://smitadey.org/wp-content/uploads/2020/10/USA-dinner-feature-image-30.jpg')",
            backgroundAttachment: "cover",
            backgroundColor: "gray",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "80vh",
          }}
        >
          <div className="text-white text-center w-75">
            <h3 className="mb-3 fw-semibold">Feel the Authentic and Original <br /> Taste from Us</h3>
            <p>If you really want to recreate the authentic taste of your grandmother's cooking, there's one thing you are going to have to stock up on...</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-american-dishes-1652886459.jpg')",
            backgroundAttachment: "cover",
            backgroundColor: "gray",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "80vh",
          }}
        >
          <div className="text-white text-center w-75">
            <h3 className="mb-3 fw-semibold">Extra Ordinary Taste and Experience</h3>
            <p>It gives you extra ordinary taste which will break all your previous taste experience.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url('https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6PKE24Y9v1knp7HWHx4Mz2/99fa8e454a2c8b27bee16b39db8c0981/StudentLife_StudentGroup_Eating_Outdoor_GettyImages-495799500.jpeg?fit=thumb')",
            backgroundAttachment: "cover",
            backgroundColor: "gray",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "80vh",
          }}
        >
          <div className="text-white text-center w-75">
            <h3 className="mb-3 fw-semibold">The Number #One Choice Your <br /> Hunger Solution</h3>
            <p>Are you Hungry?? Here your number one choice for hunger solution by our Experts.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
