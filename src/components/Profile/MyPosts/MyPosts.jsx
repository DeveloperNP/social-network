import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let onAddPost = () => {
    props.addPost();
  }

  let newPostChanged = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <div className={s.postsHeader}>
        <h3>MY POSTS</h3>
        <div className={s.newPost}>
          <textarea
            onChange={newPostChanged}
            value={props.newPostText}
            placeholder="Enter your post"
          />
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;