import React from "react";
import m from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>add Posts</button>
      </div>
      <Posts message="Hey,haw are you?" like="2" />
      <Posts message="Hi , I'm fine" like="12" />
    </div>
  );
};

export default MyPosts;
