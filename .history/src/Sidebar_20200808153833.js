import React from "react";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
};

export default Sidebar;
