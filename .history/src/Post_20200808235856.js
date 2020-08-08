import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
const Post = ({ displayName, username, verified, timestamp }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
      </div>
      <div className="post__body">
        <div classname="post__header"></div>
      </div>
    </div>
  );
};

export default Post;
