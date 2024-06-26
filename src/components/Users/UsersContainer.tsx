import React from 'react';
import Users from './Users.tsx';
import Preloader from '../common/Preloader/Preloader.tsx';
import { connect } from 'react-redux';
import { actions, requestUsers, followUser, unfollowUser } from '../../redux/users-reducer.ts';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors.ts';
import { UserType } from '../../types/types.ts';
import { AppStateType } from '../../redux/redux-store.ts';

const setCurrentPage = actions.setCurrentPage

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  setCurrentPage: (currentPage: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props;
    requestUsers(currentPage, pageSize);
  }
  
  onPageChanged = (pageNumber: number) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { setCurrentPage, requestUsers, followUser, unfollowUser })
)(UsersContainer);