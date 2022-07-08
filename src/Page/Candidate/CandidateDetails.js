import React from "react";
import ProfileImg from "../../Images/Profile/2.jpg";
import Nav from "../../Components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import {
  AiFillEye,
  AiFillMail,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { ImFacebook, ImDownload } from "react-icons/im";

import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";

export default function CandidateDetails() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Candidate Details</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Candidate Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Can-details">
        <div className="left-div">
          <img className="profileimg" alt="img" src={ProfileImg}></img>
          <div className="details">
            <div>
              <h2>Contact Info</h2>

              <p>
                <FaPhoneAlt className="icon" /> Call : +07554332332
              </p>
              <p>
                <AiFillMail className="icon" /> Hello @shishr.com
              </p>
              <p>
                <HiLocationMarker className="icon"  /> 4th Floor , 102 room
              </p>
            </div>
            <div>
              <h2>Social Links</h2>

              <p>
                <ImFacebook className="icon" />
                 www.faceboo.com
              </p>
              <p>
                <AiFillInstagram className="icon" /> www.instagram.com
              </p>
              <p>
                <AiFillLinkedin className="icon" />www.linkedin.com
              </p>
              <p>
                <AiOutlineTwitter className="icon" />www.twitter.com
              </p>
            </div>
            <div className="myskillArea">
              <h2>My Skills</h2>

              <div>
                <p>FrontEnd Design </p>
                <p>32%</p>
              </div>
              <progress id="file" value="32" max="100"></progress>
              <div>
                <p>Software Development</p>
                <p>75%</p>
              </div>
              <progress id="file" value="75" max="100">
                {" "}
              </progress>
              <div>
                <p>UI/UX Design </p>
                <p>90%</p>
              </div>
              <progress id="file" value="90" max="100"></progress>
            </div>
          </div>
        </div>
        <div className="right-div">
          <header>Jac Jacson</header>
          <h3>Web Consultant</h3>
          <p>Bachelor of Business Administration University Of Glove</p>
          <div className="btnArea">
            <button>
              View CV <AiFillEye />
            </button>
            <button>
              Download CV <ImDownload />
            </button>
          </div>
          <div>
            <div className="right-Details">
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit
                amet, consectetur adipiscing. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div>
              <h2>Eductaion</h2>
              <p>
                PHD degree in Criminal Law at University of Gable Internatinal
                (2006)
              </p>
              <p>
                PHD degree in Criminal Law at University of Gable Internatinal
                (2006)
              </p>
              <p>
                PHD degree in Criminal Law at University of Gable Internatinal
                (2006)
              </p>
              <p>
                PHD degree in Criminal Law at University of Gable Internatinal
                (2006)
              </p>
            </div>
            <div>
              <h2>Research</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
              </p>
            </div>
            <div>
              <h2>Work Experience</h2>
              <p>Hand On experience with Wordpress</p>
              <p>
                Better knowledge of front-end technologies, including HTML5,
                CSS3, JavaScript, jQuery
              </p>
              <p>
                Better knowledge of front-end technologies, including HTML5,
                CSS3, JavaScript, jQuery
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
