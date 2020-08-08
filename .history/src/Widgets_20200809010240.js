import React from "react";
import "./Widgets.css";
export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon classname="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
    </div>
  );
}
