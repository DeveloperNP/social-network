import React from "react";
import s from './FriendItem.module.css'

const FriendItem = (props) => { 
  return (
    <div className={s.friendItemWrapper}>
      <div>
        <img className={s.avatar} src={props.avatar} alt="AVA" />
      </div>
      <span className={s.name}>
        {props.name}
      </span>
    </div>
  );
}

export default FriendItem;