import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

  let usersElements = props.users.map(u =>
    <UserItem key={u.id}
              id={u.id}
              photos={u.photos}
              followed={u.followed}
              name={u.name}
              status={u.status}
              followingInProgress={props.followingInProgress}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
    />)
  
  return (
    <div className={s.usersBlock}>
      <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                 currentPage={currentPage} onPageChanged={onPageChanged}
      />
      <div>
        {usersElements}
      </div>              
      <button className={s.showMoreButton}>Show more</button>
    </div>
  ); 
}

export default Users;