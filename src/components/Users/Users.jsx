import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"
import axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&term=nick`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&term=nick`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let usersElements = this.props.users.map(u =>
      <UserItem key={u.id} id={u.id} photos={u.photos} followed={u.followed} name={u.name}
                status={u.status} follow={this.props.follow} unfollow={this.props.unfollow} />)

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    
    return (
      <div className={s.usersBlock}>
        <div>
          {
            pages.map( p => {
              return <span className={ this.props.currentPage === p ? s.selectedPage : s.usualPage }
                     key={p} onClick={ (e) => {this.onPageChanged(p)} }>{p}</span>
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
} 

export default Users;