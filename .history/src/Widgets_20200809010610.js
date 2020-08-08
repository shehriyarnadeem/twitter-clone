import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TwitterTweetEmbed from 'react-twitter-embed';
import "./Widgets.css";
export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon classname="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats happening</h2>
        <TwitterTweetEmbed tweetId={""}
      </div>
    </div>
  );
}
