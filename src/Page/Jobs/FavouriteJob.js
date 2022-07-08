import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Footer from "../../Components/Footer";
import Jobs from "../../Components/Jobs";
import Nav from "../../Components/Navbar";
export default function FavouriteJob() {
  return (
    <div>
      <div>
        <Nav />
        <div>
          <div className="CreateContainer">
            <div className="titleArea">
              <h1>Favourite Jobs</h1>
              <ul>
                <li>Home</li>
                <li>
                  <BiChevronRight id="righticon" />
                </li>
                <li>Favourite Jobs</li>
              </ul>
            </div>
          </div>
        </div>
        <Jobs />
        <Footer />
      </div>
    </div>
  );
}
