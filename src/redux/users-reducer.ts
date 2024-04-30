import { AppStateType } from './redux-store'
import { followAPI, usersAPI } from '../api/api'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { Dispatch } from 'redux'
import { ThunkAction } from '@reduxjs/toolkit'

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_PROGRESS'



let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // Array Of User's IDs
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
      }
    
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID)
      }

    default:
      return state
  }
}



type ActionsTypes = SetFollowedActionType | SetUnfollowedActionType | SetUsersActionType |
                    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType |
                    ToggleFollowingProgressActionType

type SetFollowedActionType = {
  type: typeof FOLLOW
  userID: number
}
export const setFollowed = (userID: number): SetFollowedActionType => ({ type: FOLLOW, userID })


type SetUnfollowedActionType = {
  type: typeof UNFOLLOW
  userID: number
}
export const setUnfollowed = (userID: number): SetUnfollowedActionType => ({ type: UNFOLLOW, userID })


type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })


type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })


type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
} 
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })


type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })


type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isFetching: boolean
  userID: number
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID })



type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// First method to type thunk
//export const requestUsers = (currentPage: number, pageSize: number) => {
//  return async (dispatch: DispatchType, getState: GetStateType) => { 

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {    
    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userID: number, apiMethod: any, actionCreator: (userID: number) => SetFollowedActionType | SetUnfollowedActionType) => {
  dispatch(toggleFollowingProgress(true, userID))
    
  let data = await apiMethod(userID)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(toggleFollowingProgress(false, userID))
}

export const followUser = (userID: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, followAPI.followUser.bind(followAPI), setFollowed)    
  }
}

export const unfollowUser = (userID: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, followAPI.unfollowUser.bind(followAPI), setUnfollowed)
  }
}

export default usersReducer