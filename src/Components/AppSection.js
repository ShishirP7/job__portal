import React from "react";
import AppImg1 from "../Images/App/Check.png";
import AppImg2 from "../Images/App/Book.png";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
export default function AppSection() {
  return (
    <>
      <div className="AppContainer">
        <div className="AppBox">
          <div className="app-left">
            <img className="app-img1" src={AppImg1} alt="img" />
            <img className="app-img2" src={AppImg2} alt="img" />
          </div>
          <div className="app-Right">
            <h1>Download The Glabe Mobile App</h1>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="appBtns">
              <button id="firstBtn">
                <div id="btntext">
                  <AiFillApple className="apple" />

                  <div id="ptext">Download ON</div>
                  <div>App Store</div>
                </div>
              </button>
              <button id="secondBtn">
                <div id="btntext-2">
                  <FaGooglePlay className="appstore" />

                  <div id="btext">Android App on</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
