import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"
import axios from 'axios'

const Users = (props) => {
  
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  }

  let usersElements = props.users.map(u =>
    <UserItem key={u.id} id={u.id} photos={u.photos} followed={u.followed} name={u.name}
              status={u.status} follow={props.follow} unfollow={props.unfollow} />);
  
  return (
    <div className={s.usersBlock}>
      <div>
        {usersElements}
      </div>      
      {
        props.users.length === 0
          ? <button className={s.getUsersButton} onClick={getUsers}>Get Users</button>
          : <button className={s.showMoreButton}>Show more</button>
      }
    </div>
  );
}

export default Users;