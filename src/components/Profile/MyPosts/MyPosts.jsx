import React from "react";
import Posts from "./Post/Posts";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => {
    return <Posts message={p.message} like={p.likesCount} />;
  });
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add Posts</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
