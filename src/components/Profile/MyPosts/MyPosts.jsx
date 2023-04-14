import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>MY POSTS</div>
      <div className={s.newPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;