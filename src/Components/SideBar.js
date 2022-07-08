import React from "react";
import CompaniesData from "../Datas/CompaniesData";
import Category from "../Datas/Data";
import TrainingsData from "../Datas/TrainingsData";
export default function SIdebar() {
  return (
    <div className="SideBarContainer">
      <div className="topCompanyContainer">
        <h4>Top Company</h4>

        <div className="companyArea">
          {CompaniesData.map((top) => {
            return (
              <div className="topComp">
                <img src={top.img} />
                <p>{top.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="jobCategSideBar">
        <div className="jobCategContainer">
          <h4>Job Category</h4>
          <div>
            {Category.map((cat) => {
              return (
                <div className="jobcateg">
                  <li>{cat.name}</li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="jobCategSideBar">
        <div className="jobCategContainer">
          <h4>Trainings</h4>
          <div className="trainingCards">
            {TrainingsData.map((training) => {
              return (
                <div
                  className="
                    trainingCard"
                >
                  <img src={training.img}></img>
                  <p>{training.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
