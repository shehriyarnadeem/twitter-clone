import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import { VerifiedUser } from "material-ui-icons";
const Post = ({ displayName, username, verified, timestamp }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
      </div>
      <div className="post__body">
        <div classname="post__header">
          <div className="post__headerText">
            <h3>
              {" "}
              Rafeh Qazi{" "}
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
