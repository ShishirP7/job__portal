import React from "react";
import Data from "../Datas/ProfileData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiHeart } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Profile() {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="ProfileContainer">
      <div className="FeatProfile">
        <h1>Candidates</h1>
        <Slider {...settings} className="profileSlider">
          {Data.map((profile) => {
            return (
              <div className="profileItem">
                <img src={profile.img} alt="img" />
                <div className="profileItem-details">
                  <p id="proile-Name">{profile.name}</p>
                  <p>{profile.job}</p>
                  <div id="viewProfile">
                    <p id="view">
                      View Profile <IoIosArrowRoundForward className="arrow" />
                    </p>
                    <p id="heart">
                      <HiHeart />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
