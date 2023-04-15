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
        <Post message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!" likesCount="508"/>
        <Post message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!" likesCount="287"/>
        <Post message="The weather is fine today" likesCount="35"/>
        <Post message="How are you?" likesCount="58"/>
        <Post message="Hello, World! This is my first post ^.^" likesCount="104"/>
      </div>
    </div>
  );
}

export default MyPosts;