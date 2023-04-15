import React from "react";
import s from './Post.module.css'

const Post = (props) => { 
  return (
    <div className={s.item}>
      <img src="https://cs13.pikabu.ru/post_img/big/2020/05/01/9/1588345449281620118.jpg" alt="AVA" />
      <span>{props.message}</span>
      <button>{props.likesCount} 👍🏻</button>
    </div>
  );
}

export default Post;