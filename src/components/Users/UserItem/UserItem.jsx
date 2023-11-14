import React from 'react';
import axios from 'axios'
import s from './UserItem.module.css'
import userPhoto from '../../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  
  let followRequest = () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "1d57a6e4-d30d-4717-9614-de78dd9bfc62"
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.follow(props.id)
        }
      });    
  }
  
  let unfollowRequest = () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "1d57a6e4-d30d-4717-9614-de78dd9bfc62"
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.unfollow(props.id)
        }
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
              ? <button className={s.subButton} onClick={ unfollowRequest }>Unfollow</button>
              : <button className={s.subButton} onClick={ followRequest }>Follow</button>
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