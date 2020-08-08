import React from "react";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
    </div>
  );
};

export default Sidebar;
