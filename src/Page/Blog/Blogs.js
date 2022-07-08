import React from "react";
import Nav from "../../Components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import Blog from "../../Components/Blog";
import Footer from "../../Components/Footer"
export default function Blogs() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Blog</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <Blog/>
      <Footer/>
    </div>
  );
}
