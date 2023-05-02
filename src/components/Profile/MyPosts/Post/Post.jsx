import React from "react";
import s from './Post.module.css'

const Post = (props) => { 
  return (
    <div className={s.item}>
      <img src="https://medialeaks.ru/wp-content/uploads/2019/08/2-33.jpg" alt="AVA" />
      <span>{props.message}</span>
      <button>{props.likesCount} 👍🏻</button>
    </div>
  );
}

export default Post;