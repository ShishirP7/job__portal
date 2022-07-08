import React from "react";
import Logo1 from "../Images/Footer/footer1.png";
import Logo2 from "../Images/Footer/footer2.png";
import Logo3 from "../Images/logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer-Subscribe">
        <h1>Subscribe Newsletter</h1>
        <div className="footer-Icons">
          <img className="imgg" src={Logo1} alt="img" />
          <img className="imgg2" src={Logo2} alt="img" />
          <img className="imgg3" src={Logo1} alt="img" />
          <img className="imgg4" src={Logo1} alt="img" />
        </div>
        <div className="inputBox">
          <input
            className="subscribe-input"
            placeholder="        Enter Your Email"
          />
          <button className="subscribeBtn">Subscribe</button>
        </div>
      </div>

      <div className="footer-details">
        <div className="footer-row1">
          <img src={Logo3} alt="logo" className="logoProduct" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="socialmedia-icons">
            <TiSocialFacebook />
            <BsYoutube />
            <BsTwitter />
            <AiFillInstagram />
          </div>
          <div className="icons"></div>
        </div>
        <div className="footer-row2">
          <h2>Category</h2>
          <hr className="hr2" />
          <div className="footer-items">
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Development
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Business
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Tech & IT
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Finance
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Networking
            </p>
          </div>
        </div>
        <div className="footer-row3">
          <h2>Quick Links</h2>
          <hr className="hr2" />
          <div className="footer-items">
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Home
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> About US
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Blogs
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Companies
            </p>
            <p className="footertext">
              <MdOutlineKeyboardArrowRight /> Testimonials
            </p>
          </div>
        </div>
        <div className="footer-row3">
          <h2>Find US</h2>
          <hr className="hr2" />
          <div className="footer-items">
            <p className="footertext">
              <IoIosPin className="icons" /> 28/A Street, New York City
            </p>
            <p className="footertext">
              <BsTelephoneFill className="icons" /> +88 0123 456 789
            </p>
            <p className="footertext">
              <HiOutlineMailOpen className="icons" /> hello@gable.com
            </p>
          </div>
        </div>
      </div>
      <hr className="hr3" />
      <div className="copyright">
        <p>
          Copyright <FaCopyright /> 2022 Designed By Mind Risers{" "}
        </p>
        <p>Terms & Conditions - Privacy Policy</p>
      </div>
    </div>
  );
}
