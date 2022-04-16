import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

import image1 from "../..//images/breakfast/breakfast1.png";
import image2 from "../../images/lunch/lunch2.png";
import image3 from "../../images/dinner/dinner1.png";
import "./CarouselSlide.css";
const CarouselSlide = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    accessibility: true,
    // fade: true,
  };
  return (
    <div className="w-96 mt-10">
      <Slider {...settings}>
        <div className="mx-2 p-1">
          <img src={image1} alt="" />
        </div>
        <div className="mx-2 p-1">
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlide;
