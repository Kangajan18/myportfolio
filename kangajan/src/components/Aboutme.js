import React from "react";
import "./Aboutme.css";
import welcomeImage from "../images/welcomeImage.jpg";
const Aboutme = () => {
  return (
    <div className="con">
      <div className="row">
        <div className="col-md">
          <img
            className="responsive"
            src={welcomeImage}
            alt="Logo"
            height="700"
            width="1370"
          />
          <div className="myinfo">
            <h1>Kangajan Kuganathan</h1>
            <p>Fullstack Developer</p>
            <div className="btnbox">
              <button className="btn btn-warning">Download my CV</button>
              <button className="btn btn-default" id="myworkbtn">
                My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
