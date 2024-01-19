import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/common-style.css";

// images
import sliderImg from "../assets/images/slider-img-01.png";
import sliderImg01 from "../assets/images/slider-img-02.png";
import sliderImg02 from "../assets/images/slider-img-03.png";
import sliderImg03 from "../assets/images/slider-img-04.png";
import sliderImg04 from "../assets/images/slider-img-05.png";

import { Customowlslide } from "../assets/style";

const Owlslider = () => {
  const options = {
    loop: false,
    center: false,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    singleItem: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 4.5,
      },
    },
  };
  return (
    <>
      <Customowlslide>
        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <img src={sliderImg} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
          <div class="item">
            <img src={sliderImg01} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
          <div class="item">
            <img src={sliderImg02} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
          <div class="item">
            <img src={sliderImg03} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
          <div class="item">
            <img src={sliderImg04} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
          <div class="item">
            <img src={sliderImg} />
            <div className="slider_Content">
              <h4> Hamburg </h4>
              <p> 2023 </p>
            </div>
          </div>
        </OwlCarousel>
      </Customowlslide>
    </>
  );
};

export default Owlslider;
