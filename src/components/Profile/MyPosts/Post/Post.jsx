import React from "react";
import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://cs13.pikabu.ru/post_img/big/2020/05/01/9/1588345449281620118.jpg" alt="AVA" />
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!</span>
      <button>Like</button>
    </div>
  );
}

export default Post;