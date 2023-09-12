import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let newPostChanged = (text) => {
//     let action = updateNewPostTextActionCreator(text); 
//     props.store.dispatch(action);
//   }

//   return (<MyPosts
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//             addPost={addPost}
//             updateNewPostText={newPostChanged}
//           />);
// }

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let newPostChanged = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }

          return <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={newPostChanged} />
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;