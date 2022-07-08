import React from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";
import { MdAttachMoney,MdPeople,MdOutlineWork ,MdOutlineAlternateEmail} from "react-icons/md";
import {FaUserGraduate} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {BsFillTelephoneFill} from "react-icons/bs";



export default function Jobdetails() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Jobdetails</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Jobdetails</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="job-desc-Column">
        <div className="job-desc-row1">
          <h2>Job Description</h2>
          <p>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam sapiente dolor quos expedita quis, ad perspiciatis hic nihil laboriosam at eius"
            }
          </p>
          <h2>Required Knowledge,Skills and Abilities</h2>
          <div>
            <p>
              <i class="icofont-users-alt-3"></i> Hand On experience with
              Wordpress
            </p>
            <p>
              Better knowledge of front-end technologies, including HTML5, CSS3,
              JavaScript, jQuery
            </p>
            <p>Belief – believing in yourself and those around you</p>
            <p>
              Experience designing and developing responsive design websites
            </p>
            <p>
              Ability to convert comprehensive layout and wireframes into
              working HTML pages
            </p>

            <p>Strong understanding of PHP back-end development</p>
          </div>
          <div>
            <h2>Education Qualification</h2>
            <p> Any Graduattion Degree(13th Pass) (Preferred)</p>
            <p>
              Advanced degree or equivalent experience in graphic and web design
            </p>
            <p>2 or more years of professional design experience</p>
            <p>Direct response email experience</p>
            <p>Ecommerce website design experience</p>
          </div>
          <button className="applynowbtn">Apply Now</button>
        </div>
        <div className="job-desc-row2">
          <div className="overview">
            <h1>Overview</h1>
            <hr />
            <div className="overviewDtl">
              <div>
                <MdAttachMoney  id="icons" />
              </div>
              <div>
                <strong>Offered Salary</strong>
                <p>10K -150K</p>
              </div>
            </div>
            <div className="overviewDtl">
              <div><MdOutlineWork id="icons"/></div>
              <div>
                <strog>Experience</strog>
                <p>2Years</p>
              </div>
            </div>
            <div className="overviewDtl">
              <div> <MdPeople  id="icons" /></div>
              <div>
                <strong>Gender</strong>
                <p>Male</p>
              </div>
            </div>
            <div className="overviewDtl">
              <div><FaUserGraduate  id="icons"/></div>
              <div>
                <strong>Qualification</strong>
                <p>Masters Degree</p>
              </div>
            </div>
          </div>
          <div className="CompanyAdd">
            <h1>Company Address</h1>
            <hr />
            <div>
              <p><HiLocationMarker id="icons"/>4th floor,408 Chamber</p>
            </div>
            <div>
              <p><BsFillTelephoneFill id="icons"/>Call: 02133123125</p>
            </div>
            <div>
              <p><MdOutlineAlternateEmail id="icons"/>Hello@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
