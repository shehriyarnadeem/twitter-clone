import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
          <input type="text" placeholder="Whats Happening" />
        </div>
        {/* <input
          className="tweetBox__imageInput"
          placeholder="Optional : Enter image URL"
          type="text"
        /> */}
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
