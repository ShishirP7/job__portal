import React, { useState } from "react";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Register.css";
import RegisterForm from "../Components/RegisterForm";
import RegisterForm2 from "../Components/RegisterForm2";
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF, FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoGoogleplus, IoMdArrowRoundForward } from "react-icons/io";

export default function Register() {
  const [show, setshow] = useState(0);

  return (
    <div>
      <Nav />
      <div className="SigninOption">
        <div className="login-Area">
          <div onClick={() => setshow(2)} className="login-column">
            <div id="login-row">
              <i className="flaticon-job-search"></i>
              <div>
                <p>Candidate </p>
                <h3 >Login as a Job</h3>
              </div>
            </div>
            <div>
              <p>
                Get Started <IoMdArrowRoundForward />
              </p>
            </div>
          </div>

          <div  onClick={() => setshow(1)} className="login-column">
            <div id="login-row">
              <div>
                <p>Employer </p>
                <h3>Login as a Employer </h3>
              </div>
            </div>  
            <div>
              <p>
                Get Started <IoMdArrowRoundForward />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={show===1?"RegisterContainer":"nullclass"}>
        <RegisterForm />
      </div>

      <div className={show==2?"RegisterContainer":"nullclass"}>
        <RegisterForm2 />
      </div>

      <Footer />
    </div>
  );
}
