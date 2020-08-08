import React from "react";
import "./SidebarOption.css";
const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebaroption">
      <Icon />
      <h3>{text}</h3>
    </div>
  );
};

export default SidebarOption;
