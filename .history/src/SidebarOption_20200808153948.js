import React from "react";
import "./SidebarOption.css";
const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebaroption">
      <h2>{Icon}</h2>
    </div>
  );
};

export default SidebarOption;
