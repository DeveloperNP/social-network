import { stopSubmit } from 'redux-form'
import { ResultCodes, profileAPI } from '../api/api.ts'
import { reset } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { ThunkAction } from '@reduxjs/toolkit'
import { AppStateType } from './redux-store'

const ADD_POST = 'social-network/profile/ADD_POST'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'



let initialState = {
  posts: [
    { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 4, message: 'The weather is fine today', likesCount: 35 },
    { id: 5, message: 'How are you?', likesCount: 58 },
    { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: ''
}

export type InitialStateType = typeof initialState



const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  
  switch (action.type) {
      
    case ADD_POST: 
      let newPost = {
        id: 7,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }

    case DELETE_POST: 
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postID)
      }
    
      case SET_USER_PROFILE: 
        return {
          ...state,
          profile: action.profile
        }
      
      case SET_USER_STATUS: 
        return {
          ...state,
          status: action.status
        }

      case SAVE_PHOTO_SUCCESS: 
        return {
          ...state,
          profile: {...state.profile, photos: action.photos} as ProfileType
        }
    
    default:
      return state
  }
}



type ActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType |
                    SetUserStatusActionCreator | SavePhotoSuccessActionType

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })


type DeletePostActionType = {
  type: typeof DELETE_POST
  postID: number
}
export const deletePost = (postID: number): DeletePostActionType => ({ type: DELETE_POST, postID })


type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })


type SetUserStatusActionCreator = {
  type: typeof SET_USER_STATUS
  status: string
}
export const setUserStatus = (status: string): SetUserStatusActionCreator => ({ type: SET_USER_STATUS, status })

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userID: number | null): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getUserProfile(userID)
    dispatch(setUserProfile(data))
  }
}

export const getUserStatus = (userID: number): ThunkType => {
  return async (dispatch) => {
    let status = await profileAPI.getUserStatus(userID)
    dispatch(setUserStatus(status))   
  }
}

export const updateUserStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      let response = await profileAPI.updateUserStatus(status)

      if (response.resultCode === ResultCodes.Success) {
        dispatch(setUserStatus(status))
      }
    } catch(error) {
      // Errors handling
      alert('THUNK: updateUserStatus\nSome error occurred')
    }
  }
}

export const savePhoto = (file: any): ThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.resultCode === ResultCodes.Success) {
      dispatch(savePhotoSuccess(response.data.photos))      
    }
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userID
    let response = await profileAPI.saveProfile(profile)

    if (response.resultCode === ResultCodes.Success) {
      dispatch(getUserProfile(userID))
    } else {
      // @ts-ignore
      dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}))
      return Promise.reject(response.messages[0])
    }
  }
}

export const addPostClearForm = (newPostText: string): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
  return (dispatch) => {
    dispatch(addPost(newPostText))
    // @ts-ignore
    dispatch(reset('profileAddPostForm'))
  }
}

export default profileReducer