import React, { useState } from "react";
import jobsData from "../Datas/JobsData";
import { ImLocation } from "react-icons/im";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Jobs() {
  const [Toggle, setToggle] = useState(1);

  const checkTab = (e) => {
    setToggle(e.Target.value);
    console.log(Toggle);
  };
  return (
    <div className="col-5">
      <div> 
        <section className={"active-category"}>
        
          {jobsData.map((jobs) => (
            <div key={jobs.id} id="card-type">
              <div className="card-type-row">
                <div>
                  <img src={jobs.image} alt="img"></img>
                </div>
                <div className="card-info">
                  <p id="card-name">{jobs.Name}</p>
                  <p id="card-site">{jobs.website}</p>
                  <p id="card-salary">
                    <RiMoneyDollarBoxFill className="money" /> {jobs.salary}
                  </p>  
                  <p id="card-location">
                    <ImLocation className="money" />
                    {jobs.location}
                  </p>
                </div>
                <div id="card-btn">
                  <Link to="/jobdetails">
                    <button id="button-1">Details</button>
                  </Link>
                  <button id="button-2">{jobs.time}</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
