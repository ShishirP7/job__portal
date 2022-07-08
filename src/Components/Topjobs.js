import React from "react";
import jobsData from "../Datas/JobsData";
import { GiAlliedStar } from "react-icons/gi";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function TopJobs(props) {
  return (
    <>
      <div className="container-Job">
        <div className="jobArea">
          <h1>
            <GiAlliedStar className="Hotjo" /> {props.name}
          </h1>
          <div className="jobCard-Area">
            {jobsData.map((jobs) => (
              <div className="jobCardd">
                <img src={jobs.image} alt="job-img" />
                <div>
                  <h3>{jobs.Name}</h3>
                  <p>{jobs.website}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
