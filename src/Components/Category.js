import React from "react";
import data from "../Datas/Data";
import { ImArrowRight2 } from "react-icons/im";
export default function Category() {
  return (
    <div className="categorycontainer">
      <div className="col-3">
        <h1>Choose Your Desired Category</h1>

        <div className="catitem-container">
          <div className="category-Items">
            {data.map((category) => (
              <div className="card">
                <img
                  className={
                    category.id === 1
                      ? "categoryImg"
                      : category.id === 2
                      ? "categoryImg2"
                      : category.id === 3
                      ? "categoryImg3"
                      : category.id === 4
                      ? "categoryImg4"
                      : category.id === 5
                      ? "categoryImg5"
                      : category.id === 6
                      ? "categoryImg6"
                      : category.id === 7
                      ? "categoryImg7"
                      : category.id === 8
                      ? "categoryImg8"
                      : category.id === 9
                      ? "categoryImg9"
                      : "categoryImg10"
                  }
                  src={category.image}
                  alt="cat-img"
                />
                <p
                  className={
                    category.id === 1
                      ? "category-Text"
                      : category.id === 2
                      ? "category-Text2"
                      : category.id === 3
                      ? "category-Text3"
                      : category.id === 4
                      ? "category-Text4"
                      : category.id === 5
                      ? "category-Text5"
                      : category.id === 6
                      ? "category-Text6"
                      : category.id === 7
                      ? "category-Text7"
                      : category.id === 8
                      ? "category-Text8"
                      : category.id === 9
                      ? "category-Text9"
                      : "category-Text10"
                  }
                >
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col4Container">
        <div className="col-4">
          <div id="col-4-left">
            <img
              id="col-4-img1"
              src={require("../Images/col4img1.jpg")}
              alt="col3img"
            ></img>
            <img
              id="col-4-img2"
              src={require("../Images/col4img2.jpg")}
              alt="col3img"
            />
            <div className="col4-text">
              <p>100% Trusted</p>
            </div>
          </div>
          <div>
            <div id="col-4-right">
              <div className="col4-items">
                <h2>Trusted &#38;Popular Job Portal</h2>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
                <div id="col-4-btn">
                  <button id="col4-btn1">
                    Post a Job <ImArrowRight2 />
                  </button>
                  <button id="col4-btn2">
                    Apply Now <ImArrowRight2 />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
