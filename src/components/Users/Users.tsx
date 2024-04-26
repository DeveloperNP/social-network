import React from "react";
import UserItem from "./UserItem/UserItem.tsx";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator.tsx";
import { UserType } from "../../types/types.ts";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
}

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: PropsType): React.JSX.Element => {

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