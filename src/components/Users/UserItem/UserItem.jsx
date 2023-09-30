import React from "react";
import s from './UserItem.module.css'

const UserItem = (props) => {
  return (
    <div>
      <span className={s.inlineBlock}>
        <div>
          <img src={props.avatar} alt='AVA' className={s.avatar} />
        </div>
        <div>
          {
            props.followed
              ? <button onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(props.id) }}>Follow</button>
          }
        </div>
      </span>
      <span className={s.inlineBlock}>
        <div>
          {props.firstName}
        </div>
        <div>
          {props.status}
        </div>
      </span>
      <span className={s.inlineBlock}>
        <div>
          {props.location.country}
        </div>
        <div>
          {props.location.city}
        </div>
      </span>
    </div>
  );
}

export default UserItem;