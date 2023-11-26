import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, followUser, unfollowUser } from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {   
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users users={this.props.users}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             followingInProgress={this.props.followingInProgress}             
             followUser={this.props.followUser}
             unfollowUser={this.props.unfollowUser}
      />
    </>
  }
} 

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, { setCurrentPage, getUsers, followUser, unfollowUser })(AuthRedirectComponent);