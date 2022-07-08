import React from "react";
import Nav from "../../Components/Navbar";
import "../../Style/jobs.css"

import Footer from "../../Components/Footer"
import PostJobform from "../../Components/Forms/PostJobform";
import { BiChevronRight } from "react-icons/bi";
export default function Postajob() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Post a Job</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Post a Job</li>
            </ul>
          </div>
        </div>
      </div>
      <PostJobform/>
      <Footer/>
    </div>
  );
}
