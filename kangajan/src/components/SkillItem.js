import React from "react";

const SkillItem = (props) => {
  return (
    <div className="items">
      <img src={props.name} height="100" weight="100" />
      <label>{props.title}</label>
    </div>
  );
};

export default SkillItem;
