import React from 'react';
import s from './UserItem.module.css'
import userPhoto from '../../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';

const UserItem = (props) => {
  
  let followRequest = () => {
    props.toggleFollowingProgress(true, props.id);

    followAPI.followUser(props.id)
      .then(data => {
        if (data.resultCode === 0) {          
          props.follow(props.id)
        }

        props.toggleFollowingProgress(false, props.id);
      });    
  }
  
  let unfollowRequest = () => {
    props.toggleFollowingProgress(true, props.id);
    
    followAPI.unfollowUser(props.id)
      .then(data => {
        if (data.resultCode === 0) {          
          props.unfollow(props.id)
        }

        props.toggleFollowingProgress(false, props.id);
      });
  }
  
  return (
    <div className={s.userItemWrapper}>
      <div className={s.avaAndSubBlock}>
        <div>
          <NavLink to={`/profile/${props.id}`}>
            <img src={props.photos.small != null ? props.photos.small : userPhoto} alt='AVA' className={s.avatar} />
          </NavLink>
        </div>
        <div>
          {
            props.followed
              ? <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.subButton} onClick={ unfollowRequest }>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.subButton} onClick={ followRequest }>Follow</button>
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