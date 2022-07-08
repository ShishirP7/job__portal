import React from "react";

export default function PostJobform() {
  return (
    <>
      <div className="jobFormContainer">
        <div className="jobForm">
          <h1> Post Your Job</h1>
          <div className="form-colu1">
            <div>
              <p>Job Title</p>
              <input placeholder="UX/UI Designer" />
            </div>
            <div>
              <p>Job Category</p>
              <select name="category" id="categoryjob">
                <option value="IT technology">It and Technology</option>
                <option value="UX UI ">UX/UI Designer </option>
                <option value="Web Developer">Web Developer</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
          </div>
          <div className="form-colu1">
            <div>
              <p>Company Name</p>
              <input placeholder="Winbrans.com" />
            </div>
            <div>
              <p>Company Name</p>
              <input placeholder="Winbrans.com" />
            </div>
          </div>
          <div className="form-colu1">
            <div>
              <p>Vacancies </p>
              <input placeholder="10" />
            </div>
            <div>
              <p>Locations</p>
              <input placeholder="putalisadak ,Kathmadu" />
            </div>
          </div>
          <div className="form-colu2">
            <div>
              <p>Job Type </p>
              <div className="radioContainer">
                <div>
                  <input type="radio" id="radio" name="age" />
                  <label for="radio"> Full Time</label>
                </div>
                <div>
                  <input type="radio" id="radio" name="age" />
                  <label for="radio"> Part Time</label>
                </div>
                <div>
                  <input type="radio" id="radio" name="age" />
                  <label for="radio"> Intern Time</label>
                </div>
              </div>
            </div>
          </div>
          <div className="descArea">
            <p>Description</p>
            <input></input>
          </div>
          <div className="btnArea">
            <button
              className="
            jobPost_Btn"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
