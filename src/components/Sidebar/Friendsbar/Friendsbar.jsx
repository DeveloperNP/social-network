import React from "react";
import s from './Friendsbar.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friendsbar = (props) => {
  let friendsElements = props.friends.map(f => <FriendItem name={f.name} avatar={f.avatar} />);

  return (
    <div className={s.friendsbarWrapper}>
      <span className={s.header}>Friends</span>
      <div className={s.friendItems}>
        {friendsElements}
      </div>
    </div>
  );
}

export default Friendsbar;