import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"
import axios from 'axios'

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  
  render() {
    return (
      <div className={s.usersBlock}>
        <div>
          {this.props.users.map(u =>
            <UserItem key={u.id} id={u.id} photos={u.photos} followed={u.followed} name={u.name}
                      status={u.status} follow={this.props.follow} unfollow={this.props.unfollow} />)}
        </div>              
        <button className={s.showMoreButton}>Show more</button>
      </div>
    ); 
  }
} 

export default Users;