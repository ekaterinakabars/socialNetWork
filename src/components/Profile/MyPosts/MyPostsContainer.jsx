import {
  addNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer ";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    addNewPostTextActionCreator: (text) => {
      let action = addNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
