import React from "react";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     updateNewPostText: (text) => {      
//       dispatch(updateNewPostTextActionCreator(text));
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts);

export default MyPostsContainer;