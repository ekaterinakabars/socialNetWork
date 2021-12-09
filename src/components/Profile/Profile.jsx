import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import m from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://skylandtourism.com/wp-content/uploads/2018/08/IMG_world-1200x675.jpg"
          width="300px"
          height="200px "
        />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
