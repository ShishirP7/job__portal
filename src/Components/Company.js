import React from "react";
import Data from "../Datas/CompaniesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiLocationMarker } from "react-icons/hi";

export default function Company() {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="companyContainer">

   
    <div className="col-slider">
      <h1>Popular Companies</h1>

      <div className="sliderContainer">
        <Slider {...settings} className="Sliderr">
          {Data.map((company) => {
            return (
              <div className="sliderItems">
                <div>
                  <img src={company.img} alt="" />
                  <p id="companyName">{company.name}</p>
                  <p>
                    <HiLocationMarker /> {company.address}
                  </p>
                  <button className="scrollitem-button">Hiring</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    </div>
  );
}
