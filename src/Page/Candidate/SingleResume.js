import React from "react";
import Img from "../../Images/Profile/4.jpg";
import Nav from "../../Components/Navbar";
import "../../Style/Candidate.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";
export default function SingleResume() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Single Resume</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Single Resume</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="singleResume">
        <div className="leftDiv">
          <div className="perInfo">
            <img src={Img} alt="Image"></img>
            <div className="perInfo-details">
              <h1>Jery Hudson</h1>
              <p><HiLocationMarker  className="icont"/>Barmingham,UK</p>
              <p> <CgChevronDoubleRight className="icont"/>Web Consultant</p>
              <p><BiTime  className="icont"/>Updated 1 Year Ago</p>
            </div>
          </div>
          <div>
            <h1>Description</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="infoskill">
            <h1>Skills</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              delectus voluptate harum maxime nihil facilis incidunt quae
              aspernatur est officiis minus blanditiis perspiciatis, tempora
              aliquid quaerat quasi soluta saepe earum.
            </p>
            <p> <CgChevronDoubleRight className="icont"/> Web Developer</p>
            <p> <CgChevronDoubleRight className="icont"/> UX/UI Designer</p>
            <p> <CgChevronDoubleRight className="icont"/> Marketing</p>
            <p> <CgChevronDoubleRight className="icont"/> SEO</p>
          </div>
          <h1>Education</h1>
          <p>Senior Web Designer at Gable International University</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            veniam omnis reprehenderit excepturi magnam modi.
          </p>
        </div>
        <div className="rightDiv">
          <div>
            <div className="jobCat">
            <h2>Job Categories</h2>
            <hr />
              <p><button></button>Web Developer</p>
              <p><button></button>Web Designer</p>
              <p><button></button>UX/UI Designer</p>
              <p><button></button>Marketing</p>
              <p><button></button>SEO</p>
              <p><button></button>Networking</p>
            </div>
            <div className="jobLocations">
            <h2>Job Locations</h2>
            <hr />
          
              <p><button></button>New York</p>
              <p><button></button>Washington</p>
              <p><button></button>Chicago</p>
              <p><button></button>Houston</p>
              <p><button></button>Los Angeles</p>
            </div>
            <div className="jobTypes">
            <h2>Job Types</h2>
            <hr />
            
              <p><button></button>Free Lancing</p>
              <p><button></button>Part Time</p>
              <p><button></button>Full Time</p>
              <p><button></button>Internship</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
