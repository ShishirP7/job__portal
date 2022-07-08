import React from "react";
import Jobs from "../Images/employee.png";
import CVsub from "../Images/cvsubmitted.png";
import Company from "../Images/enterprise.png";
import Appoint from "../Images/vacancy.png";
import CountUp from "react-countup";

export default function Counter() {

  return (
    <div className="col">
      <div className="col-Counter">
        <div id="countercontainer">
          <div>
            <img src={Jobs} alt="imageCounter" />
            <p id="Counter">
              <CountUp end={14000} duration={1} />+
            </p>
            <p>Job Available</p>
          </div>
          <div>
            <img src={CVsub} alt="cv"></img>
            <p id="Counter">
              <CountUp end={18000} duration={1} />+
            </p>
            
            <p>CV Submitted</p>
          </div>
          <div>
            <img alt="imageCounter" src={Company} />
            <p id="Counter">
              <CountUp end={9000} duration={1} />+
            </p>
            <p>Companies</p>
          </div>
          <div>
            <img alt="imageCounter" src={Appoint} />
            <p id="Counter">
              <CountUp end={35000} duration={1} />+
            </p>
            <p>Appopinted Job</p>
          </div>
        </div>
      </div>
    </div>
  );
}
