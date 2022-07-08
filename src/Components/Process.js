import React from "react";
import RegisterIcon from "../Images/register.png";
import CVicon from "../Images/CV.jpg";
import ApplyIcon from "../Images/Apply.png";

export default function Process() {
  return (
    <div className="col-2">
      <div className="col-2items">
        <div>
          <img id="registerIcon" src={RegisterIcon} alt="Reg" />
          <hr className="hr1" />
          <div>Register Your Account</div>
        </div>

        <div>
          <img src={CVicon} alt="Cv" />
          <hr className="hr1" />
          <div>Upload Your Resume</div>
        </div>
        <div>
          <img src={ApplyIcon} alt="apply" />
          <div>Apply for Dream Job</div>
        </div>
      </div>
    </div>
  );
}
