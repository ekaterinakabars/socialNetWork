import React from "react";
import Posts from "./Post/Posts";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => {
    return <Posts message={p.message} like={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.addNewPostTextActionCreator(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>add Posts</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
