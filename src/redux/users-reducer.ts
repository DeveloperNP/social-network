import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store'
import { BaseResponseType, ResultCodes } from '../api/api.ts'
import { followAPI } from '../api/follow-api.ts'
import { usersAPI } from '../api/users-api.ts'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { Dispatch } from 'redux'



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

    case 'social-network/users/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
      }
    
    case 'social-network/users/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
      }

    case 'social-network/users/SET_USERS':
      return {
        ...state,
        users: [...action.users]
      }
    
    case 'social-network/users/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    
    case 'social-network/users/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    
    case 'social-network/users/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    
    case 'social-network/users/TOGGLE_FOLLOWING_PROGRESS':
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



type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setFollowed: (userID: number) => ({ type: 'social-network/users/FOLLOW', userID } as const),

  setUnfollowed: (userID: number) => ({ type: 'social-network/users/UNFOLLOW', userID } as const),

  setUsers: (users: Array<UserType>) => ({ type: 'social-network/users/SET_USERS', users } as const),

  setCurrentPage: (currentPage: number) => ({ type: 'social-network/users/SET_CURRENT_PAGE', currentPage } as const),

  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'social-network/users/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),

  toggleIsFetching: (isFetching: boolean) => ({ type: 'social-network/users/TOGGLE_IS_FETCHING', isFetching } as const),

  toggleFollowingProgress: (isFetching: boolean, userID: number) => ({ type: 'social-network/users/TOGGLE_FOLLOWING_PROGRESS', isFetching, userID } as const)
}




type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType

type ThunkType = BaseThunkType<ActionsTypes>

// First method to type thunk
//export const requestUsers = (currentPage: number, pageSize: number) => {
//  return async (dispatch: DispatchType, getState: GetStateType) => { 

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {    
    dispatch(actions.toggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userID: number,
                                   apiMethod: (userID: number) => Promise<BaseResponseType>,
                                   actionCreator: (userID: number) => ActionsTypes) => {
  
  dispatch(actions.toggleFollowingProgress(true, userID))
    
  let data = await apiMethod(userID)
  if (data.resultCode === ResultCodes.Success) {
    dispatch(actionCreator(userID))
  }
  dispatch(actions.toggleFollowingProgress(false, userID))
}

export const followUser = (userID: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, followAPI.followUser.bind(followAPI), actions.setFollowed)    
  }
}

export const unfollowUser = (userID: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, followAPI.unfollowUser.bind(followAPI), actions.setUnfollowed)
  }
}

export default usersReducer