import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <img
        src="https://skylandtourism.com/wp-content/uploads/2018/08/IMG_world-1200x675.jpg"
        width="100px"
        height="100px "
      /> */}

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"you"} />
        ava + description
        <div>
          <div>{props.profile.contacts.vk}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
