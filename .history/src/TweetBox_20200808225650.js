import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src=""
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
