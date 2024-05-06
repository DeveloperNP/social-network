import { stopSubmit } from 'redux-form'
import { ResultCodes, profileAPI } from '../api/api.ts'
import { reset } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { ThunkAction } from '@reduxjs/toolkit'
import { AppStateType, InferActionsTypes } from './redux-store'



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
      
    case 'social-network/profile/ADD_POST': 
      let newPost = {
        id: 7,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }

    case 'social-network/profile/DELETE_POST': 
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postID)
      }
    
      case 'social-network/profile/SET_USER_PROFILE': 
        return {
          ...state,
          profile: action.profile
        }
      
      case 'social-network/profile/SET_USER_STATUS': 
        return {
          ...state,
          status: action.status
        }

      case 'social-network/profile/SAVE_PHOTO_SUCCESS': 
        return {
          ...state,
          profile: {...state.profile, photos: action.photos} as ProfileType
        }
    
    default:
      return state
  }
}



type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  addPost: (newPostText: string) => ({ type: 'social-network/profile/ADD_POST', newPostText } as const),

  deletePost: (postID: number) => ({ type: 'social-network/profile/DELETE_POST', postID } as const),
  
  setUserProfile: (profile: ProfileType) => ({ type: 'social-network/profile/SET_USER_PROFILE', profile } as const),
  
  setUserStatus: (status: string) => ({ type: 'social-network/profile/SET_USER_STATUS', status } as const),
  
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'social-network/profile/SAVE_PHOTO_SUCCESS', photos } as const)  
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userID: number | null): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getUserProfile(userID)
    dispatch(actions.setUserProfile(data))
  }
}

export const getUserStatus = (userID: number): ThunkType => {
  return async (dispatch) => {
    let status = await profileAPI.getUserStatus(userID)
    dispatch(actions.setUserStatus(status))   
  }
}

export const updateUserStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      let response = await profileAPI.updateUserStatus(status)

      if (response.resultCode === ResultCodes.Success) {
        dispatch(actions.setUserStatus(status))
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
      dispatch(actions.savePhotoSuccess(response.data.photos))      
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
    dispatch(actions.addPost(newPostText))
    // @ts-ignore
    dispatch(reset('profileAddPostForm'))
  }
}

export default profileReducer