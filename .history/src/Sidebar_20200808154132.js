import React from "react";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Icon from "@material-ui/icons/Search";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption Icon={} text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
    </div>
  );
};

export default Sidebar;
