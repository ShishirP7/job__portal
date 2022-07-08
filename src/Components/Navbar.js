import React, { useState } from "react";
import "../Style/navigation.css";
import { Link } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
let Logo = require("../Images/logo.png");
const Navbar = () => {
  const [show, setshow] = useState(false);
  const [form, setform] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <img src={Logo} alt="logo"></img>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link style={{ textDecoration: "none" }} to="/">
          <a href="/home">Home</a>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <a href="/about">About</a>
        </Link>
        <div class="dropdown">
          <a className="navItems">
            <IoMdArrowDropdown className="downArrow" />
            Jobs
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-content">
            <Link to="/Joblist" style={{ textDecoration: "none" }}>
              <a>Job Lists</a>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/Postajob">
              <a>Post a Job</a>
            </Link>
          </div>
        </div>
        <div class="dropdown">
          <a className="navItems">
            <IoMdArrowDropdown className="downArrow" />
            Candidates
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-content">
            <Link style={{ textDecoration: "none" }} to="/CandidateList">
              <a>Candidate List</a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/CandidateDetails">
              <a>Candidate Details</a>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/SingleResume">
              <a>Single Resume</a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/upload">
              <a>Submit Resume</a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Pricing">
              <a>Pricing</a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/CandidateDash">
              <a>Candidate Dashboard</a>
            </Link>
          </div>
        </div>
        <div class="dropdown">
          <a className="navItems">
            <IoMdArrowDropdown className="downArrow" />
            Pages
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-content">
            <Link style={{ textDecoration: "none" }} to="/CompanyList">
              <a>Company List</a>
            </Link>
            <a>Company Details</a>
            <a>Create Account Page</a>
            <a>Profile</a>
            <a>Single Profile</a>
            <a>404</a>
            <a>FAQ</a>
            <a>Terms and Conditions</a>
            <a>Policy Profile</a>
          </div>
        </div>
        <div class="dropdown">
          <a className="navItems">
            <IoMdArrowDropdown className="downArrow" />
            Blogs
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-content">
            <Link style={{ textDecoration: "none" }} to="/blogs">
              <a>Blog</a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/blogdetails">
              <a>Blog Details</a>
            </Link>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <a href="/about">Contact</a>
        </Link>
      </div>
      <div className="navbuttons">
        <button className="btn1" onClick={() => setshow(!show)}>
          Login
        </button>
        <Link style={{ textDecoration: "none" }} to="/register">
          <button className="btn2">Register</button>
        </Link>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <div className="LoginContainer">
        {show && (
          <div className="dropdownLogin">
            <h2>Choose Your Account</h2>
            <div className="btnArea">
              <button onClick={() => setform(1)}>Job Seeker</button>
              <button onClick={() => setform(2)}>Employers</button>
            </div>
            <div className={form === 1 ? "formLogin1" : "nullclass"}>
              <div className="inputArea">
                <input placeholder="E-Mail Address"></input>
                <input placeholder="Password"></input>
              </div>
              <div className="forgotpww">
                <div>
                  <input type="checkbox"></input>
                  <label>Remember Me</label>
                </div>
                <span>Forgot Password?</span>
              </div>
              <button className="LoginBtn">Login</button>

              <p className="AccountText">
                Dont have an Account ?{" "}
                <Link style={{ textDecoration: "none" }} to="/register">
                  <span>Register Now</span>
                </Link>
              </p>
              <p>or</p>
              <div className="loginwith">
                <div className="fbLogin">
                  <FaFacebookF className="socialIcon" /> Login With Facebook
                </div>
                <div className="googleLogin">
                  <FcGoogle className="socialIcon" /> Login With Google
                </div>
              </div>
            </div>
            <div className={form === 2 ? "formLogin1" : "nullclass"}>
              <div className="inputArea">
                <input placeholder="E-Mail Address"></input>
                <input placeholder="Password"></input>
              </div>
              <div className="forgotpww">
                <div>
                  <input type="checkbox"></input>
                  <label>Remember Me</label>
                </div>
                <span>Forgot Password?</span>
              </div>
              <button className="LoginBtn">Login</button>

              <p className="AccountText">
                Dont have an Account ?{" "}
                <Link style={{ textDecoration: "none" }} to="/register">
                  <span>Register Now</span>
                </Link>
              </p>
              <p>or</p>
              <div className="loginwith">
                <div className="fbLogin">
                  <FaFacebookF className="socialIcon" /> Login With Facebook
                </div>
                <div className="googleLogin">
                  <FcGoogle className="socialIcon" /> Login With Google
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
