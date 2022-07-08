import React from "react";
import Category from "../Components/Category";
import Nav from "../Components/Nav";
import Process from "../Components/Process";
import Jobs from "../Components/Jobs";
import Counter from "../Components/Counter";
import PopularArea from "../Components/PopularArea";
import Company from "../Components/Company";
import Profile from "../Components/Profile";
import AppSection from "../Components/AppSection";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import "../Style/sideBar.css";
import { FiSearch } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import Sidebar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import HotJobs from "../Components/HotJobs";
import TopJobs from "../Components/Topjobs";
import FeaturedJobs from "../Components/FeaturedJobs";
import { GiAlliedStar } from "react-icons/gi";
// import Oddometer from "../Components/Odometer/odometer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="column1">
        <div className="homeBody">
          <div className="bodyItems">
            <div className="headline">
              Find Your <span>Desired</span> Job
            </div>
            <p>Jobs, Employment &#38; Future Carrer Opportunities </p>

            <div className="homeBody-Search">
              <form>
                <div>
                  <input id="left" placeholder="      Job Title"></input>
                  <FiSearch className="searchbar" />
                  <input placeholder="     City or State" />
                  <ImLocation className="location" />
                  <select name="category" id="comboBox">
                    <option value="abcd">Job Category</option>
                    <option value="abcd">Finance</option>
                    <option value="abcd">Marketing</option>
                    <option value="abcd">Production</option>
                    <option value="abcd">Bank</option>
                    <option value="abcd">Hospitality</option>
                    <option value="abcd">NGO</option>
                  </select>

                  <button id="btn-search">Search</button>
                </div>
              </form>
            </div>
            <div className="btn-create-container">
              <Link style={{ textDecoration: "none" }} to="/create">
                {" "}
                <button className="btn-create">Create Your Profile</button>{" "}
              </Link>
              <Link to="/upload">
                {" "}
                <button className="btn-create">Upload Your CV</button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="jobAndSideBar">
        <div>
          <TopJobs name={"Top Jobs"} />
          <TopJobs name={"Premimum Jobs"} />
          <TopJobs name={"Featured Jobs"} />
        </div>
        <div>
          <Sidebar/>
        </div>
      </div>

      <PopularArea />
      <Counter />
      <Category />

      <Company />

      <Profile />
      <AppSection />
      <Blog />
      <Footer />
    </div>
  );
}
