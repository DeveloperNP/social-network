import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../assets/images/userPhoto.jpg'

const UserItem = (props) => {
  return (
    <div className={s.userItemWrapper}>
      <div className={s.avaAndSubBlock}>
        <div>
          <img src={props.photos.small != null ? props.photos.small : userPhoto} alt='AVA' className={s.avatar} />
        </div>
        <div>
          {
            props.followed
              ? <button className={s.subButton} onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
              : <button className={s.subButton} onClick={() => { props.follow(props.id) }}>Follow</button>
          }
        </div>
      </div>
      <div className={s.userInfoBlock}>
        <div className={s.firstName}>
          {props.name}
        </div>
        <div className={s.status}>
          {props.status}
        </div>
      </div>
      <div className={s.locationBlock}>
        <div>
          {'props.location.country'}
        </div>
        <div>
          {'props.location.city'}
        </div>
      </div>
    </div>
  );
}

export default UserItem;