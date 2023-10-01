import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(   
      [
        {
          id: 1, followed: true, firstName: 'Nickolai', status: 'Hello there!',
          location: { country: 'Russia', city: 'Smolensk' }, avatar: './images/Nickolai_avatar.jpg'
        },
  
        {
          id: 2, followed: false, firstName: 'Andrey', status: 'Hi, how are you',
          location: { country: 'Russia', city: 'Smolensk' }, avatar: './images/Andrey_avatar.jpg'
        },
  
        {
          id: 3, followed: true, firstName: 'Lyonya', status: 'Just chill...',
          location: { country: 'Russia', city: 'Smolensk' }, avatar: './images/Lyonya_avatar.jpg'
        },

        {
          id: 4, followed: false, firstName: 'Julia', status: 'Hi!',
          location: { country: 'Russia', city: 'Smolensk' }, avatar: './images/Julia_avatar.jpg'
        }
      ]);
  }
  
  let usersElements = props.users.map(u =>
    <UserItem key={u.id} id={u.id} avatar={u.avatar} followed={u.followed}
              firstName={u.firstName} status={u.status} location={u.location}
              follow={props.follow} unfollow={props.unfollow} />);
  
  return (
    <div className={s.usersBlock}>
      <div>
        {usersElements}
      </div>
      <button className={s.showMoreButton}>Show more</button>
    </div>
  );
}

export default Users;