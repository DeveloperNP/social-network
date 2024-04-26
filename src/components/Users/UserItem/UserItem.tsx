import React from 'react';
import s from './UserItem.module.css'
import userPhoto from '../../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom';
import { PhotosType } from '../../../types/types';

type PropsType = {
  id: number
  photos: PhotosType
  followed: boolean
  name: string
  status: string | null
  followingInProgress: Array<number>
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
}

const UserItem = (props: PropsType): React.JSX.Element => {
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
              ? <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.subButton}
                        onClick={ () => { props.unfollowUser(props.id) } }>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.subButton}
                        onClick={ () => { props.followUser(props.id) } }>Follow</button>
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