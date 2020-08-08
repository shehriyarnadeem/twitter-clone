import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubble from "@material-ui/icons/ChatBubble";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite } from "material-ui-icons";
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
              Rafeh Qazi{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>i challenge you to build twitter clone</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/g4UAqGuShn2P1TC3Nf/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubble fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
