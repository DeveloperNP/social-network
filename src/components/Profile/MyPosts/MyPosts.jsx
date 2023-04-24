import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 3, message: 'The weather is fine today', likesCount: 35 },
    { id: 4, message: 'How are you?', likesCount: 58 },
    { id: 5, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.posts}>
      <div className={s.postsHeader}>
        <h3>MY POSTS</h3>
        <div className={s.newPost}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;