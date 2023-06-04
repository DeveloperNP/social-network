import React from "react";
import s from './Post.module.css'

const Post = (props) => { 
  return (
    <div className={s.item}>
      <img src="./images/Nickolai_avatar.jpg" alt="AVA" />
      <span>{props.message}</span>
      <button>{props.likesCount} 👍🏻</button>
    </div>
  );
}

export default Post;