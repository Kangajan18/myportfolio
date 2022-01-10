import React from "react";
import java from "../images/java.png";
import react from "../images/react.png";
import springBoot from "../images/springBoot.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import unity from "../images/unity.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import BOOTSTRAP from "../images/BOOTSTRAP.png";
import mysql from "../images/mysql.png";
import flutter from "../images/flutter.png";
import "./Skills.css";

const Skils = () => {
  return (
    <div className="container">
      <div className="boxesContainer">
        <div className="items">
          <img src={react} alt="Java" height="100" weight="100" />
          <label>React</label>
        </div>
        <div className="items">
          <img src={java} alt="Java" height="100" weight="100" />
          <label>Java</label>
        </div>
        <div className="items">
          <img src={springBoot} alt="Java" height="100" weight="100" />
          <label>SpringBoot</label>
        </div>
        <div className="items">
          <img src={nodejs} alt="Java" height="100px" weight="100px" />
          <label>NodeJS</label>
        </div>
        <div className="items">
          <img src={mongodb} alt="Java" height="100" weight="100" />
          <label>MangoDb</label>
        </div>
        <div className="items">
          <img src={unity} alt="Java" height="100" weight="100" />
          <label>Unity</label>
        </div>
        <div className="items">
          <img src={html} alt="Java" height="100" weight="100" />
          <label>HTML</label>
        </div>
        <div className="items">
          <img src={css} alt="Java" height="100" weight="100" />
          <label>CSS</label>
        </div>
        <div className="items">
          <img src={js} alt="Java" height="100" weight="100" />
          <label>JAVASCRIPT</label>
        </div>
        <div className="items">
          <img src={BOOTSTRAP} alt="Java" height="100" weight="100" />
          <label>BOOTSTRAP</label>
        </div>
        <div className="items">
          <img src={mysql} alt="Java" height="100" weight="100" />
          <label>MYSQL</label>
        </div>
        <div className="items">
          <img src={flutter} alt="Java" height="100" weight="100" />
          <label>FLUTTER</label>
        </div>
      </div>
    </div>
  );    
};

export default Skils;
