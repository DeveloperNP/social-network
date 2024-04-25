import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import { setCurrentPage, requestUsers, followUser, unfollowUser } from '../../redux/users-reducer.ts';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props;
    requestUsers(currentPage, pageSize);
  }
  
  onPageChanged = (pageNumber) => {
    const {setCurrentPage, requestUsers, pageSize} = this.props;
    setCurrentPage(pageNumber);
    requestUsers(pageNumber, pageSize);
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

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { setCurrentPage, requestUsers, followUser, unfollowUser })
)(UsersContainer);