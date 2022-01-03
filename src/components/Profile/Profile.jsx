import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfaleInfo/ProfileInfo";
// import m from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
