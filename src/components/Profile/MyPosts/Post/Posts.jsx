import React from "react";
import m from "./Posts.module.css";

const Posts = (s) => {
  return (
    <div className={m.item}>
      <img
        src="https://i.pinimg.com/originals/50/5f/82/505f82b65a0c0a2118ba74ff0eaa1780.jpg"
        alt=""
      />
      {s.message}
      <div>
        <span> like {s.like}</span>
      </div>
    </div>
  );
};

export default Posts;
