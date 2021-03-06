import React from "react";

const Post = ({ displayName, username, verified, timestamp }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
      </div>
    </div>
  );
};

export default Post;
