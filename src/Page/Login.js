import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF,FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoGoogleplus,IoMdArrowRoundForward } from "react-icons/io";
import Banner from "../Components/Banner";

export default function Login() {
  return (
    <div>
      <Navbar/>
      <Banner name={"Log In"}/>

      <div className="login-Container">
        <div>
          <h1>Login Your Account</h1>
        </div>
        <div className="login-Area">
          <div className="login-column">
            <div id="login-row">
              <i className="flaticon-job-search"></i>
              <div>
                <p>Candidate </p>
                <h3>Login as a Candidate</h3>
              </div>
            </div>
            <div>
              <p>Get Started <IoMdArrowRoundForward/></p>
            </div>
          </div>

          <div className="login-column">
            <div id="login-row">
             
              <div>
                <p>Employer </p>
                <h3>Login as a Employer </h3>
              </div>
            </div>
            <div>
              <p>Get Started  <IoMdArrowRoundForward/></p>
            </div>
          </div>
        </div>

        <div className="login-InputUName">
          <input placeholder="Username ,Phone Number or Email"></input>
          <input placeholder="Password"></input>
        </div>
        <div className="login-SignIN">
          <p className="forgotpw">Forgot Password?</p>
          <div className="login-signup">
            <p>Dont Have Account ?</p>
            <Link style={{textDecoration: 'none'}} to="/signup"><span>Sign Up Here</span></Link>
            
          </div>

          <button className="signinbtn">Sign In</button>
        </div>
        <div className="loginwith">
          <button className="fbbtn">
            <FaFacebookF /> Login With Facebook
          </button>
          <button className="googlebtn">
            <IoLogoGoogleplus /> Login With Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
