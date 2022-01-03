import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://skylandtourism.com/wp-content/uploads/2018/08/IMG_world-1200x675.jpg"
        width="300px"
        height="200px "
      />
      <div className={s.descriptionBlock}>ava + discription</div>
    </div>
  );
};

export default ProfileInfo;
