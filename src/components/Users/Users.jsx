import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

let Users = (props) => {

  let usersElements = props.users.map(u =>
    <UserItem key={u.id}
              id={u.id}
              photos={u.photos}
              followed={u.followed}
              name={u.name}
              status={u.status}
              follow={props.follow}
              unfollow={props.unfollow}
    />)

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div className={s.usersBlock}>
      <div className={s.pagesBlock}>
        {
          pages.map( p => {
            return <div className={ props.currentPage === p ? s.selectedPage : s.usualPage }
                    key={p} onClick={ (e) => {props.onPageChanged(p)} }>{p}</div>
          })
        }
      </div>
      <div>
        {usersElements}
      </div>              
      <button className={s.showMoreButton}>Show more</button>
    </div>
  ); 
}

export default Users;