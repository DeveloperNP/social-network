import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
      };
    
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
      }; 

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID)
      };

    default:
      return state;
  }
}

export const setFollowed = (userID) => ({ type: FOLLOW, userID });

export const setUnfollowed = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID });



export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userID));
    
  let data = await apiMethod(userID);     
  if (data.resultCode === 0) {
    dispatch(actionCreator(userID));
  }
  dispatch(toggleFollowingProgress(false, userID));
}

export const followUser = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userID, followAPI.followUser.bind(followAPI), setFollowed);     
  }
}

export const unfollowUser = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userID, followAPI.unfollowUser.bind(followAPI), setUnfollowed);
  }
}

export default usersReducer;