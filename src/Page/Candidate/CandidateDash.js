import React, { useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";
import Logo from "../../Images/Candidate.jpg";
import MyprofileDetails from "../../Components/Forms/MyprofileDetails";
export default function CandidateDash() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1> Candidate Dashboard </h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Candidate Dashboard </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="canProfile">
          <div id="details">
            <img src={Logo}></img>
            <h2>Aikin Ward</h2>
            <p>UI/UX Designer</p>
          </div>
          <div id="btns">
            <button className="Dash-Activebtn" value={1}>
              My Profile
            </button>
            <button className="Dash-NonActivebtn">Change Password</button>
            <button className="Dash-NonActivebtn">Saved jobs</button>
            <button className="Dash-NonActivebtn">Logout</button>
          </div>
        </div>
      </div>
      <MyprofileDetails />
      <Footer />
    </div>
  );
}
