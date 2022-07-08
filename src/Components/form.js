import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Form() {
  return (
    <div>
      <div class="create">
        <div class="create-ContactArea">
          <div class="create-Contact">
            <p>Already create an Account?</p>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
          <div class="uploadPhoto">
            <div id="choose">
              <BsFillCameraFill class="imgCamera" />

              <input
                class="uploadImgButton"
                type="file"
                name="upload_file"
              ></input>
            </div>
            <div id="InputDetails">
              <input placeholder="Your Name Here"></input>
              <input placeholder="Profession"></input>
              <button>Done</button>
            </div>
          </div>
        </div>
      </div>
      <div className="PersonalInfo">
        <div className="BasicInfo">
          <h1>Basic Information</h1>
          <div>
            <button className="uploadcover">Upload Cover Photo</button>
            <button className="uploadcv">Upload Your CV</button>
          </div>
          <div className="inputname">
            <div>
              <p>Your Name</p>
              <input id="input1"></input>
            </div>
            <div>
              <p>Your Email</p>
              <input id="input1"></input>
            </div>
          </div>
          <div className="inputname">
            <div>
              <p>Date of Birth</p>
              <input id="input1"></input>
            </div>
            <div>
              <p>Your Phone</p>
              <input id="input1"></input>
            </div>
          </div>
          <div className="inputname">
            <div>
              <p>Job Title</p>
              <input id="input1"></input>
            </div>
            <div>
              <p>Address</p>
              <input id="input1"></input>
            </div>
          </div>
          <div className="genderArea">
            <p>Gender</p>
            <div id="genderRadio">
              <input type="radio" name="gender" id="male" value="male" />
              Male
              <input type="radio" name="gender" id="female" value="female" />
              Female
            </div>
          </div>
          <div>
            <p>Description</p>
            <input id="input-Description" name="description" />
          </div>
        </div>

        <div className="SkillArea">
          <div id="a">
            <h1>Skill</h1>
            <div className="SkillbuttonArea">
              <button id="btn1">Edit</button>
              <button>Add Skills</button>
            </div>
          </div>
          <div id="b">
            <div className="skill-Textarea">
              <p>Title</p>
              <input id="input1"></input>
            </div>
            <div className="percentageSlider">
              <p>Percentage</p>
            </div>
          </div>
        </div>
        <div className="SkillArea">
          <div id="a">
            <h1>Social Links</h1>
            <div className="SkillbuttonArea">
              <button id="btn1">Edit</button>
              <button>Add New</button>
            </div>
          </div>
          <div>
            <div className="social-col1">
              <div className="social-textfield1">
                <p>Facebook</p>
                <input id="input1"></input>
              </div>
              <div>
                <p>Instagram</p>
                <input id="input1"></input>
              </div>
            </div>
            <div className="social-col2">
              <div>
                <p>LinkedIn</p>
                <input id="input1"></input>
              </div>
              <div>
                <p>Dribble</p>
                <input id="input1"></input>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-save">save</button>
      </div>
    </div>
  );
}
