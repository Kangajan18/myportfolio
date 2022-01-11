import React from "react";
import JAVA from "../images/java.png";
import REACT from "../images/react.png";
import SpringBoot from "../images/springBoot.png";
import NODEJS from "../images/nodejs.png";
import MONGODB from "../images/mongodb.png";
import UNITY from "../images/unity.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JAVASCRIPT from "../images/js.png";
import BOOTSTRAP from "../images/BOOTSTRAP.png";
import MYSQL from "../images/mysql.png";
import FLUTTER from "../images/flutter.png";
import "./Skills.css";
import SkillItem from "./SkillItem";

const Skils = () => {
  return (
    <div className="containerskill">
      <div className="boxesContainer">
        <SkillItem name={JAVA} title={"JAVA"} />
        <SkillItem name={REACT} title={"REACT"} />
        <SkillItem name={SpringBoot} title={"SpringBoot"} />
        <SkillItem name={NODEJS} title={"NODEJS"} />
        <SkillItem name={JAVASCRIPT} title={"JAVASCRIPT"} />
        <SkillItem name={BOOTSTRAP} title={"BOOTSTRAP"} />
        <SkillItem name={HTML} title={"HTML"} />
        <SkillItem name={CSS} title={"CSS"} />
        <SkillItem name={MYSQL} title={"MYSQL"} />
        <SkillItem name={MONGODB} title={"MONGODB"} />
        <SkillItem name={UNITY} title={"UNITY"} />
        <SkillItem name={FLUTTER} title={"FLUTTER"} />
      </div>
    </div>
  );
};

export default Skils;
