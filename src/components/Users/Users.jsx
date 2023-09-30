import React from "react";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(   
      [
        {
          id: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_the_Republic_of_Belarus_with_the_state_emblem_2020.png/1280px-Flag_of_the_Republic_of_Belarus_with_the_state_emblem_2020.png',
          followed: true, firstName: 'Dmitry', status: 'Hello there!', location: { country: 'Belarus', city: 'Minsk' }
        },
  
        {
          id: 2, avatar: 'https://pngicon.ru/file/uploads/Flag-SShA.png',
          followed: false, firstName: 'Alex', status: 'Hi, how are you', location: { country: 'USA', city: 'New-York' }
        },
  
        {
          id: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png',
          followed: true, firstName: 'Beatrice', status: 'Buongiorno :)', location: { country: 'Italy', city: 'Milano' }
        }
      ]);
  }
  
  let usersElements = props.users.map(u => <UserItem key={u.id} id={u.id} avatar={u.avatar} followed={u.followed} firstName={u.firstName} status={u.status} location={u.location} follow={props.follow} unfollow={props.unfollow} />);
  
  return (
    <div>
      {usersElements}
    </div>
  );
}

export default Users;