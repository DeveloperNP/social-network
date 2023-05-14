import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.posts}>
      <div className={s.postsHeader}>
        <h3>MY POSTS</h3>
        <div className={s.newPost}>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;